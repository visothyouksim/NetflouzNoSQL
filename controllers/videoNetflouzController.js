const Video = require("../models/videoNetflouzModel");

const getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find();
        res.json({ message: "Voici la liste des vidéos", videos });
    } catch (error) {
        res.json({ message: "Une erreur est survenue", error });
    }
};

const addVideo = async (req, res) => {
    const video = new Video({
        title: req.body.title,
        url: req.body.url,
    });
    try {
        const savedVideo = await video.save();
        res.json({ message: "Video ajoute avec succes", savedVideo });
    } catch (error) {
        res.json({ message: "Une erreur est survenue", error });
    }
};

const showVideo = async (req, res) => {
    try {
        const video = await Video.findById(req.params.videoId);
        res.json({ message: "Voici la video", video });
    } catch (error) {
        res.json({ message: "Une erreur est survenue", error });
    }
};

const updateVideo = async (req, res) => {
    try {
        const updatedVideo = await Video.updateOne(
            { _id: req.params.videoId },
            {
                $set: {
                    title: req.body.title,
                    url: req.body.url,
                },
            }
        );
        res.json({ message: "Video mis a jour avec succes", updatedVideo });
    } catch (error) {
        res.json({ message: "Une erreur est survenue", error });
    }
};

const deleteVideo = async (req, res) => {
    try {
        const deletedVideo = await Video.deleteOne({ _id: req.params.videoId });
        res.json({ message: "Video supprime avec succes", deletedVideo });
    } catch (error) {
        res.json({ message: "Une erreur est survenue", error });
    }
};

module.exports = { getAllVideos, addVideo, showVideo, updateVideo, deleteVideo };