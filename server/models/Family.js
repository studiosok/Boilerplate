const Sequelize = require("sequelize")
const db = require('../db')

const Family = db.define("family", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    species: {
        type: Sequelize.STRING
    },
    superPower: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    favoriteThing: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    dependent: {
        type: Sequelize.BOOLEAN
    }
    
})

module.exports = Family