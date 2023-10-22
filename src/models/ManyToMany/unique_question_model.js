import { DataTypes } from "sequelize"
import { sequelize } from "../../database/connect.js"
export const uniquequestion = sequelize.define(
    "uniquequestion",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        texto_pregunta: {
            allowNull: false,
            type: DataTypes.STRING
        },
    },
    {
        timestamps: false,
    }
)
