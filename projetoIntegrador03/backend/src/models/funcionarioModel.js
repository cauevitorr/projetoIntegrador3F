import {DataTypes} from "sequelize"
import conn from "../config/conn.js"

const funcionarios = conn.define("funcionarios",{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false

    },
    cargo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    curso:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status_curso:{
        type: DataTypes.ENUM,
        values: ["pendente", "cursando", "concluido"],
        allowNull: false
    },
    data_inicio:{
        type: DataTypes.STRING,
        allowNull: false
    },
    data_conclusao:{
        type: DataTypes.STRING,
        allowNull: false
    }

})

export default funcionarios
