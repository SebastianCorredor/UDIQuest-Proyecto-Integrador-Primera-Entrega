import { DataTypes } from "sequelize"
import { sequelize } from "../../database/connect.js"

export const student = sequelize.define(
  "students",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cedula_estudiante: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING
    },
    apellido: {
      allowNull: false,
      type: DataTypes.STRING
    },
    correo_electronico: {
      allowNull: false,
      type: DataTypes.STRING
    },
    contraseña: {
      allowNull: false,
      type: DataTypes.STRING
    },
    sede: {
      allowNull: false,
      type: DataTypes.STRING
    },
    programa_academico: {
      allowNull: false,
      type: DataTypes.STRING
    },
  },
  {
    timestamps: false,
  }
)
