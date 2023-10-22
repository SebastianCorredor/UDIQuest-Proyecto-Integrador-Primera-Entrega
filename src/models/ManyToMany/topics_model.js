import { DataTypes } from "sequelize";
import {sequelize } from "../../database/connect.js"
export const topic = sequelize.define(
    "topics",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        categoria: {
            allowNull: false,
            type: DataTypes.STRING
        },
        descripcion: {
            allowNull: true,
            type: DataTypes.STRING
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    },
    {
        timestamps: false,
    }
)
