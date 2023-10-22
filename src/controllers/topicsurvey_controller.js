import { Router } from "express";
import { topic } from "../models/ManyToMany/topics_model.js"; 
import { survey } from "../models/ManyToMany/survey_model.js";
import "../models/ManyToMany/topicsurvey.js"

const topicSurveyRouter = Router()

topicSurveyRouter.get("/topic/survey", async (req, res) => {
    try {
        const topic = await topic.findAll({
            include: {
                model: survey,
            },
        })
        res.json(topic)
    } catch (error) {
        console.error(error)
        console.error(error.name)
        res.status(500).json({ error: error.message })
    }
})

topicSurveyRouter.get("/survey/topic", async (req, res) => {
    try {
        const survey = await survey.findAll({
            include: {
                model: topic,
            },
        })
        res.json(topic)
    } catch (error) {
        console.error(error)
        console.error(error.name)
        res.status(500).json({ error: error.message })
    }
})
export default topicSurveyRouter
