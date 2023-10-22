import { Router } from "express"

import { topic } from "../models/ManyToMany/topics_model.js"
import "../models/ManyToMany/multiplequestiontopic.js"
import { multiplequestion} from "../models/ManyToMany/multiple_question_model.js"
const multipleQuestionTopicRouter = Router()

multipleQuestionTopicRouter.get("/multiplequestion/topic", async (req, res) => {
    try {
        const multiplequestions = await multiplequestion.findAll({
            include: {
                model: topic,
            },
        })
        res.json(multiplequestions)
    } catch (error) {
        console.error(error)
        console.error(error.name)
        res.status(500).json({ error: error.message })
    }
})

multipleQuestionTopicRouter.get("/topic/multiplequestion", async (req, res) => {
    try {
        const topics = await topic.findAll({
            include: {
                model: multiplequestion,
            },
        })
        res.json(topics)
    } catch (error) {
        console.error(error)
        console.error(error.name)
        res.status(500).json({ error: error.message })
    }
})
export default multipleQuestionTopicRouter
