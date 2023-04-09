const Project = require("../models/Project");
const Category = require("../models/Category");
const Partner = require("../models/Partner");
const mongoose = require("mongoose");
const { localeStrToDate } = require("../utils/global");

exports.getAllProjects = async (req, res, next) => {
  try {
    const query = req.query.q ? req.query.q.toLowerCase() : "";
    const projects = await Project.find().populate([
      { path: "category", select: "name" },
      { path: "partner", select: ["name", "avatar"] },
    ]);
    const filteredProject = projects.filter(
      (proj) =>
        proj.title.toLowerCase().includes(query) ||
        proj._id.toString().toLowerCase().includes(query)
    );
    return res.send(filteredProject);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "Server Error" });
  }
};

exports.createProject = async (req, res, next) => {
  try {
    const {
      title,
      category,
      shortDesc,
      story,
      startDate,
      endDate,
      expectedMoney,
      partner,
      imagesDesc,
    } = req.body;
    const files = req.files;
    const images = JSON.parse(imagesDesc).map((img, i) => {
      return {
        name: img.name,
        url: `${req.protocol}://${req.get("host")}/${files[i].path}`,
        description: img.description,
      };
    });

    const newProject = await new Project({
      title,
      category: mongoose.Types.ObjectId(category),
      startDate: localeStrToDate(startDate),
      endDate: localeStrToDate(endDate),
      partner: mongoose.Types.ObjectId(partner),
      shortDesc,
      story,
      images,
      finishPercent: 0,
      totalMoney: 0,
      totalTrans: 0,
      expectedMoney,
    });
    await newProject.save().then(() => {
      return res.status(201).send({ message: "Create Project!" });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "Server Error" });
  }
};

exports.getProject = async (req, res, next) => {
  try {
    const id = req.params.id;
    const project = await Project.findById(id).populate([
      { path: "category", select: "name" },
      { path: "partner", select: "name" },
    ]);
    return res.send(project);
  } catch (err) {
    return res.status(500).send({ error: "Server Error" });
  }
};

exports.deleteProject = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedProject = await Project.findByIdAndDelete(id);
    if (deletedProject) {
      return res.send({ message: "Deleted project" });
    }
  } catch (err) {
    return res.status(500).send({ error: "Server Error" });
  }
};

exports.updateProject = async (req, res, next) => {
  try {
    const id = req.params.id;
    const {
      title,
      category,
      shortDesc,
      story,
      startDate,
      endDate,
      expectedMoney,
      partner,
      imagesDesc,
    } = req.body;
    const files = req.files;
    const newImagesDesc = JSON.parse(imagesDesc).filter((img) => !img._id);
    const oldImages = JSON.parse(imagesDesc).filter((img) => img._id);
    const images = oldImages.concat(
      ...newImagesDesc.map((img, i) => {
        return {
          name: img.name,
          url: `${req.protocol}://${req.get("host")}/${files[i].path}`,
          description: img.description,
        };
      })
    );

    const updatedProject = await Project.findByIdAndUpdate(id, {
      $set: {
        title,
        category: mongoose.Types.ObjectId(category),
        startDate: localeStrToDate(startDate),
        endDate: localeStrToDate(endDate),
        expectedMoney,
        partner: mongoose.Types.ObjectId(partner),
        shortDesc,
        story,
        images,
      },
    });

    if (updatedProject) {
      return res.send({ message: "Update successfully!" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "Server Error" });
  }
};
