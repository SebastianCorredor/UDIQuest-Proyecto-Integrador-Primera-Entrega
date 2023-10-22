import { Sequelize } from "sequelize"

export const sequelize = new Sequelize("new_schema", "root", "admin", {
  dialect: "mysql",
  port: 3306,
})
