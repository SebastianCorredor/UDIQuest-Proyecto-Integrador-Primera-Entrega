import { Router } from "express"
import { topic } from "../models/ManyToMany/topics_model.js"
const topicRouter = Router()

topicRouter.get("/topic", async (req, res) => {
    try {
        const topic = await topic.findAll()
        res.json(topic)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

topicRouter.get("/topic/:id", async (req, res) => {
    try {
        const { id } = req.params
        const topic = await topic.findByPk(id)
        res.json(topic)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

topicRouter.post("/topic", async (req, res) => {
    try {
        const { categoria, descripcion } = req.body
        const newtopic = await topic.create({
            categoria,
            descripcion,

        })
        res.status(201).json(newtopic)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

topicRouter.put("/topic/:id", async (req, res) => {
    try {
        const { id } = req.params
        const topic = await topic.findByPk(id)
        topic.set(req.body)
        await topic.save()
        res.status(202).json(topic)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

topicRouter.delete("/topic/:id", async (req, res) => {
    try {
        const { id } = req.params
        await topic.destroy({
            where: { id },
        })
        res.status(204).end()
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})
export default topicRouter
