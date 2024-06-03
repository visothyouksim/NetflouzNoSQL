const { getAllUsers, addUser, showUser, updateUser, deleteUser } = require("../controllers/userNetflouzController");
const userRouter = require("express").Router();

userRouter.get("/allUsers", getAllUsers);
userRouter.post("/createUser", addUser);
userRouter.get("/show/:userId", showUser);
userRouter.put("/update/:userId", updateUser);
userRouter.delete("/delete/:userId", deleteUser);

module.exports = userRouter;