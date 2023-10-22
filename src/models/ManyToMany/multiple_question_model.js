import { DataTypes } from "sequelize"
import { sequelize } from "../../database/connect.js"
export const multiplequestion = sequelize.define(
    "multiplequestions",
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
