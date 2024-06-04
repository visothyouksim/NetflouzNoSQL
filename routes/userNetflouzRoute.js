const { getAllUsers, addUser, showUser, updateUser, deleteUser, loginUser, logoutUser } = require("../controllers/userNetflouzController");
const userRouter = require("express").Router();

userRouter.get("/allUsers", getAllUsers);
userRouter.post("/createUser", addUser);
userRouter.get("/show/:userId", showUser);
userRouter.put("/update/:userId", updateUser);
userRouter.delete("/delete/:userId", deleteUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);

module.exports = userRouter;