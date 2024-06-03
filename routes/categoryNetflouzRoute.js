const { getAllCategories,
    addCategory,
    showCategory,
    updateCategory,
    deleteCategory } = require("../controllers/categoryNetflouzController");
const categoryRouter = require("express").Router();

categoryRouter.get("/allCategories", getAllCategories);
categoryRouter.post("/addCategory", addCategory);
categoryRouter.get("/showCategory/:categoryId", showCategory);
categoryRouter.put("/updateCategory/:categoryId", updateCategory);
categoryRouter.delete("/deleteCategory/:categoryId", deleteCategory);

module.exports = categoryRouter;