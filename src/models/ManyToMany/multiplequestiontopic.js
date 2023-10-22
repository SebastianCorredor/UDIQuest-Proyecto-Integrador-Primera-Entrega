import { DataTypes } from "sequelize"
import { sequelize } from "../../database/connect.js"
import { multiplequestion } from "./multiple_question_model.js"
import { topic } from "./topics_model.js"
export const multiplequestiontopic = sequelize.define(
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
topic.belongsToMany(multiplequestion,{
    through: multiplequestiontopic
})
multiplequestion.belongsToMany(topic,{
    through:multiplequestiontopic
})
await topic.sync()
await multiplequestion.sync()
await multiplequestiontopic.sync()
