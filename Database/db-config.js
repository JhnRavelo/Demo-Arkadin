// const Sequelize = require('sequelize')
// const dotnev = require('dotenv')

// const connectDatabase = (database)=>{
//     dotnev.config({path : '../.env'})
//     database = new Sequelize(
//         process.env.DATABASE,
//         process.env.USER,
//         process.env.PASSWORD,
//         {
//             host: process.env.HOST,
//             dialect: 'mysql'
//         }
//     )
    
//     database.authenticate().then(()=>{
//         console.log('Connected')
//     }).catch((err)=>{
//         console.error('Base de données ne répond pas', err)
//     })
//     return database
// }

// module.exports = connectDatabase