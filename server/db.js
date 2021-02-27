const Sequelize = require('sequelize')
const Family = require('./models/Family')
const Role = require('./models/Role')


const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:3000/family', {
    logging: false
})

Role.belongsTo(Family)
Family.hasMany(Role)

module.exports = {
    db,
    Family,
    Role
}