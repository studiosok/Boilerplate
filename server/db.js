const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:3000/squirrels', {
    logging: false
})

module.exports = db