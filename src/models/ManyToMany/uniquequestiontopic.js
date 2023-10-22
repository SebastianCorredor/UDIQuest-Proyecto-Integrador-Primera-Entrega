import { DataTypes } from "sequelize"
import { sequelize } from "../../database/connect.js"
import { topic } from "./topics_model.js"
import { uniquequestion } from "./unique_question_model.js"

export const uniquequestiontopic = sequelize.define(
    "multiplequestiontopic",
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
topic.belongsToMany(uniquequestion,{
    through: uniquequestiontopic
})
uniquequestion.belongsToMany(topic,{
    uniquequestiontopic
})

await topic.sync()
await uniquequestion.sync()
await uniquequestiontopic.sync()