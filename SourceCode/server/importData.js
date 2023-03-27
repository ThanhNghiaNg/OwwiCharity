const mongoose = require("mongoose");
const fs = require("fs");

const User = require("./models/User");
const Partner = require("./models/Partner");
const News = require("./models/News");
const Project = require("./models/Project");
const Category = require("./models/Category");
const Transaction = require("./models/Transaction");

require("dotenv").config();

// Connection String - MongoDB
const MONGO_URI = process.env.MONGO_URI

// Path to JSON file
const usersFilePath = `${__dirname}/json/users.json`;
const partnersFilePath = `${__dirname}/json/partners.json`;
const newsFilePath = `${__dirname}/json/news.json`;
const projectsFilePath = `${__dirname}/json/projects.json`;
const categoriesFilePath = `${__dirname}/json/categories.json`;
const transactionsFilePath = `${__dirname}/json/transactions.json`;

const importObjectHandler = async (path, Object, name = "") => {
  fs.readFile(path, (err, data) => {
    const documents = JSON.parse(data.toString()).map((document) => {
      return {
        ...document,
        _id: mongoose.Types.ObjectId(document._id.$oid),
        ...(document.partner
          ? { partner: mongoose.Types.ObjectId(document.partner.$oid) }
          : {}),
        ...(document.category
          ? { category: mongoose.Types.ObjectId(document.category.$oid) }
          : {}),
        ...(document.user
          ? { user: mongoose.Types.ObjectId(document.user.$oid) }
          : {}),
        ...(document.project
          ? { project: mongoose.Types.ObjectId(document.project.$oid) }
          : {}),

        ...(document.createdAt
          ? { createdAt: new Date(document.createdAt.$date) }
          : {}),
        ...(document.updatedAt
          ? { updatedAt: new Date(document.updatedAt.$date) }
          : {}),
        ...(document.startDate
          ? { startDate: new Date(document.startDate.$date) }
          : {}),
        ...(document.endDate
          ? { endDate: new Date(document.endDate.$date) }
          : {}),
      };
    });
    Object.insertMany(documents)
      .then(() => {
        console.log(`Imported ${name} Data!`);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

const main = async () => {
  await importObjectHandler(usersFilePath, User, "Users");
  await importObjectHandler(partnersFilePath, Partner, "Partners");
  await importObjectHandler(newsFilePath, News, "News");
  await importObjectHandler(projectsFilePath, Project, "Projects");
  await importObjectHandler(categoriesFilePath, Category, "Categories");
  await importObjectHandler(transactionsFilePath, Transaction, "Transactions");
};

mongoose.connect(MONGO_URI, () => {
  main();
});