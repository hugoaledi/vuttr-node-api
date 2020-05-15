module.exports = {
  username: 'vuttr_adm',
  password: 'vuttr#2020',
  database: 'vuttr',
  host: '127.0.0.1',
  dialect: 'mysql',
  dialectOptions: {
    // useUTC: false, //for reading from database
    dateStrings: true,
    typeCast: true,
    timezone: '-03:00'
  },
  timezone: '-03:00'
}