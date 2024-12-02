import { Sequelize } from "sequelize"

const sequelize = new Sequelize('empresa_polpa', 'root', 'Sen@iDev77!.', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize