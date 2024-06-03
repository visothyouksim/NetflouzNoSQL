const { getAllVideos, addVideo, showVideo, updateVideo, deleteVideo } = require("../controllers/videoNetflouzController");

const videoRouter = require("express").Router();

videoRouter.get("/allVideos", getAllVideos);
videoRouter.post("/createVideo", addVideo);
videoRouter.get("/show/:videoId", showVideo);
videoRouter.put("/update/:videoId", updateVideo);
videoRouter.delete("/delete/:videoId", deleteVideo);

module.exports = videoRouter;