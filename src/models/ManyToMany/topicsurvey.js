import { DataTypes } from "sequelize"
import { sequelize } from "../../database/connect.js"
import { topic } from "./topics_model.js"
import { survey } from "./survey_model.js"

export const topicsurvey = sequelize.define(
    "topicsurvey",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    },
    {
        timestamps: false,
    }
)
survey.belongsToMany(topic,{
    through: topicsurvey,
})
topic.belongsToMany(survey,{
    through: topicsurvey,
})
