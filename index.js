const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userNetflouzRoute");
const videoRouter = require("./routes/videoNetflouzRoute");
const categoryRouter = require("./routes/categoryNetflouzRoute");
const app = express();
const port = 8520;

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/NetflouzNoSQL");
    console.log("Connected to MongoDB");
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/api/user", userRouter);

app.use("/api/video", videoRouter);

app.use("/api/category", categoryRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})