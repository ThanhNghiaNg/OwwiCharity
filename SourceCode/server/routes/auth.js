const authController = require("../controllers/auth")
const express = require("express");
const router = express.Router();

router.get("/authenticated", authController.getAuthenticated);

router.post(
  "/login",
  [
    body("email", "Invalid Email!")
      .isEmail()
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((user) => {
          if (!user) {
            throw new Error("User is not Signed up!");
          }
        });
      }),
    body(
      "password",
      "Password must not contain special characters and have at least 5 characters!"
    )
      .isAlphanumeric()
      .isLength({ min: 5 }),
  ],
  authController.postLogin
);
router.post(
  "/sign-up",
  [
    body("email", "Invalid Email!").isEmail(),
    body("email").custom((value, { req }) => {
      return User.findOne({ email: value }).then((user) => {
        if (user) {
          throw new Error("Email is already signed up!");
        }
      });
    }),
    body("fullName", "Name must have at least 3 characters").isLength({
      min: 3,
    }),
    body(
      "password",
      "Password must not contain special characters and have at least 5 characters!"
    )
      .isAlphanumeric()
      .isLength({ min: 5 }),
    body("phone", "Phone must not be empty!").isLength({ min: 1 }),
    body("phone", "Phone must be numeric only!").isNumeric(),
  ],
  authController.postSignup
);

router.post("/logout", isAuth, authController.postLogout);

module.exports = router;
