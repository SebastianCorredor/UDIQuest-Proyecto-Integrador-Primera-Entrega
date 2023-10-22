import { DataTypes } from "sequelize"
import { sequelize } from "../../database/connect.js"
import { pollster } from "./pollster_model.js"
import { survey } from "./survey_model.js"

export const pollstersurvey = sequelize.define(
    "pollstersurvey",
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
pollster.belongsToMany(survey,{
    through:pollstersurvey,
})
survey.belongsToMany(pollster,{
    through: pollstersurvey,
})

await pollster.sync()
await survey.sync()
await pollstersurvey.sync()