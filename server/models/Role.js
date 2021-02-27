const Sequelize = require('sequelize')
const db = require('../db')

const Role = db.define("role", {
    roleName: {
        type: Sequelize.STRING,
        defaultValue: "Not in charge"
    }
})

module.exports = Role