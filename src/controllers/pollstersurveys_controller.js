import { Router } from "express";
import {  pollster } from "../models/ManyToMany/pollster_model.js"
import { survey } from "../models/ManyToMany/survey_model.js";
import "../models/ManyToMany/pollstersurvey.js"

const pollsterSurveyRouter = Router()

pollsterSurveyRouter.get("/pollster/survey", async (req, res) => {
    try {
        const pollsters = await pollster.findAll({
            include: {
                model: survey,
            },
        })
        res.json(pollsters)
    } catch (error) {
        console.error(error)
        console.error(error.name)
        res.status(500).json({ error: error.message })
    }
})

pollsterSurveyRouter.get("/survey/pollster", async (req, res) => {
    try {
        const surveys = await survey.findAll({
            include: {
                model: pollster,
            },
        })
        res.json(surveys)
    } catch (error) {
        console.error(error)
        console.error(error.name)
        res.status(500).json({ error: error.message })
    }
})
export default pollsterSurveyRouter
