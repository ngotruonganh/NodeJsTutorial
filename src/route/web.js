import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/detail/user/:id", homeController.getDetailPage);
  router.post('/create-new-user', homeController.createNewUser)
  router.post('/delete-user', homeController.deleteUser)

  router.get("/about", (req, res) => {
    res.send(`about page`);
  });

  return app.use("/", router);
};

export default initWebRoute;
// module.export = initWebRoute;
