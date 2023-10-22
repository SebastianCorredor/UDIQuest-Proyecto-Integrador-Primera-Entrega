import { Router } from "express"
import { survey } from "../models/ManyToMany/survey_model.js"
const surveyRouter = Router()

surveyRouter.get("/survey", async (req, res) => {
    try {
        const survey = await survey.findAll()
        res.json(survey)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

surveyRouter.get("/survey/:id", async (req, res) => {
    try {
        const { id } = req.params
        const survey = await survey.findByPk(id)
        res.json(survey)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

surveyRouter.post("/survey", async (req, res) => {
    try {
        const { titulo, descripcion, estado, fecha_creacion, fecha_activacion, fecha_desactivacion } = req.body
        const newsurvey = await survey.create({
            titulo,
            descripcion,
            estado,
            fecha_creacion,
            fecha_activacion,
            fecha_desactivacion
        })
        res.status(201).json(newsurvey)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

surveyRouter.put("/survey/:id", async (req, res) => {
    try {
        const { id } = req.params
        const survey = await survey.findByPk(id)
        survey.set(req.body)
        await survey.save()
        res.status(202).json(survey)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

surveyRouter.delete("/survey/:id", async (req, res) => {
    try {
        const { id } = req.params
        await survey.destroy({
            where: { id },
        })
        res.status(204).end()
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})
export default surveyRouter
