const express = require("express");
const router = express.Router();
const Score = require("../model/Score");
const axios = require("axios");
const { collection } = require("../model/Score");
/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

router.post(
    "/registerScore",

    async (req, res) => {
        let {
            username,
            score
        } = req.body;
        try {
            score = new Score({
                username,
                score
            });

            await score.save();

            res.status(200).json({
                score
            });
            console.log(score)
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error al guardar");
        }
    }
);

router.get("/getScore", async (req, res) => {
    const scores = await Score.find({});
    try {
        res.send(scores);
      } catch (err) {
        res.status(500).send("Error al recopilar la información");
      }
});

    module.exports = router;