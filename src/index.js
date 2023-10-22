import express from "express"
import { sequelize } from "./database/connect.js"
import topicSurveyRouter from "./controllers/topicsurvey_controller.js"
import pollsterSurveyRouter from "./controllers/pollstersurveys_controller.js"
import multipleQuestionTopicRouter from "./controllers/multiplequestiotopic_controller.js"
import topicRouter from "./controllers/topic_controller.js"
import surveyRouter from "./controllers/surveys_controller.js"
const app = express()
app.use(express.json())

try {
  await sequelize.authenticate()
  console.log("Db connected")
} catch (error) {
  console.error(error)
}
app.get("/", (req, res) => {
  res.json({ message: "Funcionando" })
})

app.use(topicRouter)
app.use(surveyRouter)
app.use(pollsterSurveyRouter)
app.use(topicSurveyRouter)
app.use(multipleQuestionTopicRouter)
const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log(`server on port ${PORT}`)
})
