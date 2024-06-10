const router = require("express").Router();
const apartmentsController = require("../controllers/apartments.controller");
const authController = require("../controllers/auth.controller");
const usersController = require("../controllers/users.controller");
const authMiddlewares = require("./../middlewares/auth.middleware");

// Apartaments routes
router.get("/apartments", apartmentsController.list);
router.get("/apartments/:id", apartmentsController.details);
router.post("/apartments", apartmentsController.create);
router.put("/apartments/:id", apartmentsController.update);
router.delete("/apartments/:id", apartmentsController.delete);

// Auth
router.post("/login", authController.login);

// User routes
router.post("/users", usersController.create);
router.get("/users", usersController.list);
router.get(
  "/users/me",
  authMiddlewares.isAuthenticated,
  usersController.getCurrentUser
);
router.get("/users/:id", usersController.getUser);

module.exports = router;
