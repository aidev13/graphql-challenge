const connection = require('../config/connection')

const { User } = require('../models')

connection.once('open', async () => {
  await User.deleteMany()

  await User.create({
    username: "Dek",
    email: "yoyo@test.com",
    password: "test123"
  })

  console.log("Seeded!")
  process.exit(0)
})