const { getAllVideos, addVideo, showVideo, updateVideo, deleteVideo } = require("../controllers/videoNetflouzController");

const videoRouter = require("express").Router();

videoRouter.get("/allVideos", getAllVideos);
videoRouter.post("/addVideo", addVideo);
videoRouter.get("/showVideo/:videoId", showVideo);
videoRouter.put("/updateVideo/:videoId", updateVideo);
videoRouter.delete("/deleteVideo/:videoId", deleteVideo);

module.exports = videoRouter;