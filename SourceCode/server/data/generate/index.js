const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const sampleData = require("../generate/sample");
const sampleNews = require("../generate/news");
const sampleProjects = require("../generate/projects");

const User = require("../../models/User");
const Partner = require("../../models/Partner");
const News = require("../../models/News");
const Project = require("../../models/Project");
const Category = require("../../models/Category");
const Transaction = require("../../models/Transaction");

require("dotenv").config();

const categories = [
  "vì trẻ em",
  "người già, người khuyết tật",
  "bệnh hiểm nghèo",
  "hoàn cảnh khó khăn",
  "hỗ trợ giáo dục",
  "đầu tư cơ sở vật chất",
  "bảo vệ môi trường",
  "cứu trợ động vật",
];

const importCategoryHander = async () => {
  categories.map(async (item, i) => {
    const existCategopry = await Category.findOne({ name: item });
    if (!existCategopry) {
      const category = await new Category({ name: item });
      await category.save();
    }
  });
};

const importUserHandler = async () => {
  for (let i = 0; i <= 20; i++) {
    const userExist = await User.findOne({ username: `user000${i}` });
    if (userExist) {
      continue;
    }
    const hashedPassword = await bcrypt.hash(`user000${i}`, 12);
    const user = await new User({
      username: `user000${i}`,
      password: hashedPassword,
      fullName: `User 0${i}`,
      email: `user000${i}@gmail.com`,
      phone: `0121901730${i}`,
      address: `24${i}/7 Tỉnh lộ 768, Vĩnh Cửu Đồng Nai`,
      avatar: ``,
      isAdmin: false,
    });
    await user.save().then((user) => {
      console.log(`Imported User ${user.username}`);
    });
  }
};

const importPartnerHandler = async () => {
  const partners = sampleData.pageProps.dataServiceBlocks.Data[7].Data.Items;
  partners.forEach(async (item) => {
    const partnerExist = await Partner.findOne({ name: item.Title });
    if (!partnerExist) {
      const partner = await new Partner({
        name: item.Title,
        avatar: item.Avatar,
        shortDesc: item.Short,
        longDesc: `${item.Title} thuộc hệ sinh thái Nuôi Em, được thành lập để nâng cao chất lượng Cơ sở vật chất cho các em nhỏ khó khăn vùng cao.
        Mỗi người 2.000 đồng/ngày, chúng tôi đã xây dựng trong 10 năm qua`,
        additionalDesc: {
          title: "Thông tin thêm",
          desc: `Được thành lập năm 2006, ${item.Title} là một tổ chức phi lợi nhuận được cấp phép tại Mỹ và hoạt động tại Việt Nam. Sứ mệnh của VCF là tạo ra các giải pháp về sức khỏe, giáo dục nhằm thay đổi cuộc sống của trẻ em và phụ nữ tại Việt Nam có hoàn cảnh khó khăn. Các hoạt động của ${item.Title} giúp thay đổi cuộc sống của hàng triệu người Việt trên khắp 63 tỉnh thành mỗi năm.
  
          ${item.Title}${item.Title} tập trung vào 3 lĩnh vực hoạt động chính:
          - Các chương trình Y tế thiết yếu gồm có: chương trình Nhịp Tim Việt Nam tài trợ chi phí mổ tim và chăm sóc tiền-hậu phẫu cho các em nhỏ mắc bệnh tim bẩm sinh; chương trình Khám Sàng Lọc khám bệnh miễn phí cho trẻ em tại các vùng sâu vùng xa; và các hỗ trợ thiết yếu khác cho trẻ em gặp nhiều vấn đề phức tạp về sức khỏe.
          - Các chương trình Nâng cao Năng lực Y tế gồm có: chương trình Nâng cao Năng lực Y tế và Nâng Niu Sự Sống cung cấp đào tạo cho các nhân viên y tế và trang thiết bị cho cấp cứu và chăm sóc trẻ sơ sinh tại các bệnh viện ở vùng sâu vùng xa; chương trình Nước sạch lắp đặt hệ thống máy lọc nước để cung cấp nước uống đạt tiêu chuẩn cho các nhóm dân cư bị thiệt thòi; các chương trình Cứu trợ khẩn cấp quốc gia tổ chức và thực hiện cứu trợ thiên tai và đại dịch.
          - Chương trình Giáo dục:Mở đường đến Tương Lai – tạo cơ hội cho các nữ sinh dân tộc thiểu số trở thành những nhân tố thay đổi thông qua việc triển khai Câu lạc bộ Nữ sinh tại các trường trung học phổ thông, đem đến sự cố vấn cần thiết cũng như đào tạo kỹ năng mềm và trao học bổng toàn phần để các em nữ sinh hoàn tất chương trình học trung học và đại học.
          
          Tầm nhìn của ${item.Title} là một Việt Nam phát triển, nơi tất cả trẻ em và phụ nữ đều khỏe mạnh, được học tập và trao quyền để có thể hưởng lợi từ sự tăng trưởng kinh tế cũng như đóng góp cho sự phát triển của cộng đồng. Tất cả các chương trình của ${item.Title} đều thực hiện cam kết sâu sắc về quyền của trẻ em và phụ nữ, bình đẳng giới, cải thiện dinh dưỡng, bảo vệ môi trường và xóa đói giảm nghèo.`,
        },
      });
      await partner.save().then((partner) => {
        console.log(`Added Partner ${partner.name}`);
      });
    }
  });
};

const importNewsHandler = async () => {
  sampleNews.map(async (news, i) => {
    const data = news.Data;
    let sponsorName = "Trung tâm Tình nguyện Quốc gia";
    let locationName = "Cao Bằng";
    let partner;
    try {
      locationName = data.Content.split(
        "Địa điểm hỗ trợ:\u003c/strong\u003e"
      )[1]
        .split("\n\u003c/p\u003e\n\n\u003cp\u003e")[0]
        .trim();
    } catch (err) {}

    try {
      sponsorName = data.Content.split("Nhà tài trợ:\u003c/strong\u003e")[1]
        .split("\n\u003c/p\u003e\n\n\u003cp\u003e")[0]
        .trim();
    } catch (err) {}
    try {
      const partnerName = data.Content.split(
        "Đơn vị triển khai:\u003c/strong\u003e \u003ca href="
      )[1]
        .split(
          "\u003c/a\u003e\n\u003c/p\u003e\n\n\u003cp\u003e\n\t\u003cstrong\u003e"
        )[0]
        .split(">")[1]
        .trim();
      partner = await Partner.findOne({
        name: { $regex: new RegExp("^" + partnerName + "$", "i") },
      });
    } catch (err) {
      partner = await Partner.findOne({ name: "Quỹ Hy Vọng" });
    }
    if (partner) {
      const news = new News({
        title: `${data.Title}`,
        shortDesc: `${data.Short}`,
        content: `${data.Content}`,
        imageURL: `${data.Avatar}`,
        location: locationName,
        sponsor: sponsorName,
        partner: partner._id,
      });
      news.save().then((news) => {});
    }
  });
};

const importProjectHandler = async () => {
  sampleProjects.map(async (data, i) => {
    const project = data.pageProps.dataDetail.Data;
    const images = project.Album.map((item) => {
      return {
        name: item.Name,
        url: item.AvatarUrl,
        description: item.Description,
      };
    });
    console.log(images);
    const categoryName =
      categories[Math.trunc(Math.random() * categories.length)];
    const category = await Category.findOne({ name: categoryName });

    let partner;
    partner = await Partner.findOne({
      name: { $regex: new RegExp("^" + project.CategoryName + "$", "i") },
    });
    if (!partner) {
      partner = await Partner.findOne({ name: "Sức mạnh 2000" });
    }

    const newProject = await new Project({
      title: `${project.Title}`,
      category: category._id,
      shortDesc: `${project.Short}`,
      story: `${project.Content}`,
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 60 * 24 * 60 * 60 * 1000),
      finishPercent: 0,
      totalMoney: 0,
      totalTrans: 0,
      expectedMoney: Number(project.ExpectedValueFormat.replace(".", "")),
      images: [...images],
      partner: partner._id,
    });
    await newProject.save();
  });
};

const importTransactionHandler = async () => {
  for (let i = 0; i < 15; i++) {
    const projects = await Project.find();
    const randomProjectNum = Math.trunc(Math.random() * projects.length);
    const randomUserNum = Math.trunc(Math.random() * 20);
    console.log(`user000${randomUserNum}`);
    const user = await User.findOne({ username: `user000${randomUserNum}` });
    console.log(user);
    console.log(projects.length, randomProjectNum);
    const project = projects[randomProjectNum];

    const transaction = await new Transaction({
      user: user._id,
      project: project._id,
      amount: 0,
      message: "",
    });
    await transaction.save();
  }
};

const generateImportDataHandler = async () => {
  console.log("Importing Data...");
  Promise.all([
    [
      await importCategoryHander(),
      await importUserHandler(),
      await importPartnerHandler(),
      await importNewsHandler(),
      await importProjectHandler(),
      await importTransactionHandler(),
    ],
  ]).then(() => {
    console.log("Import Data Successfully");
  });
};

mongoose.connect(process.env.MONGO_URI, generateImportDataHandler);
