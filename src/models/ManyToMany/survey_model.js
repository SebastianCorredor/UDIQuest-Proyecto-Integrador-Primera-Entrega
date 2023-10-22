import { DataTypes } from "sequelize"
import { sequelize } from "../../database/connect.js"

export const survey = sequelize.define(
    "survey",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING,
        },
        descripcion: {
            type: DataTypes.STRING,
        },
        estado: {
            type: DataTypes.BOOLEAN,
        },
        fecha_creacion: {
            type: DataTypes.DATE,
        },
        fecha_activacion: {
            type: DataTypes.DATE,
        },
        fecha_desactivacion: {
            type: DataTypes.DATE,
        },
    },
    {
        timestamps: false,
    }
)
