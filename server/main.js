const PORT = process.env.PORT || 5000
const app = require('./app')
const db = require('./db')
const sequelize = require('sequelize')

app.listen(PORT, console.log(`This app is running on PORT ${PORT}`))

// db.Sequelize.sync()
// db.sync()
//   .then(() => {
//     app.listen(PORT, () => console.log(`

//         Listening on port ${PORT}

//         http://localhost:${PORT}/

//     `))
//   })



// const { Sequelize, Model, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// class User extends Model {}
// User.init({
//   username: DataTypes.STRING,
//   birthday: DataTypes.DATE
// }, { sequelize, modelName: 'user' });

// (async () => {
//   await sequelize.sync();
//   const jane = await User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
//   const john = await User.create({
//     username: 'johndoe',
//     birthday: new Date(1975, 6, 10)
//   });

//   console.log(jane.toJSON());
//   console.log(john.toJSON());
// })();
