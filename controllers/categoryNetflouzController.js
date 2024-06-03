const Category = require("../models/categoryNetflouzModel");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json({ message: "Voici la liste des catégories", categories });
  } catch (error) {
    res.json({ message: "Une erreur est survenue", error });
  }
};

const addCategory = async (req, res) => {
  const category = new Category({
    name: req.body.name,
  });
  try {
    const savedCategory = await category.save();
    res.json({ message: "Catégorie ajoute avec succes", savedCategory });
  } catch (error) {
    res.json({ message: "Une erreur est survenue", error });
  }
};

const showCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId);
    res.json({ message: "Voici la catégorie", category });
  } catch (error) {
    res.json({ message: "Une erreur est survenue", error });
  }
};

const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.updateOne(
      { _id: req.params.categoryId },
      {
        $set: {
          name: req.body.name,
        },
      }
    );
    res.json({ message: "Catégorie mis a jour avec succes", updatedCategory });
  } catch (error) {
    res.json({ message: "Une erreur est survenue", error });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.deleteOne({
      _id: req.params.categoryId,
    });
    res.json({ message: "Catégorie supprime avec succes", deletedCategory });
  } catch (error) {
    res.json({ message: "Une erreur est survenue", error });
  }
};

module.exports = {
  getAllCategories,
  addCategory,
  showCategory,
  updateCategory,
  deleteCategory,
};
