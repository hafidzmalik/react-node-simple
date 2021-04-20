module.exports = {
  HOST: "localhost",
  USER: "appuser",
  PASSWORD: "password",
  DB: "testing",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};