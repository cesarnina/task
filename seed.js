const db = require('./server/db/database')
const Todo = require('./server/db/models/Todo')

const seed = async () => {
  try {
    await db.sync({force: true})

    await Todo.create({
      taskName: 'Buy dog food',
      assignee: 'Cody'
    })

    await Todo.create({
      taskName: 'Take over world',
      assignee: 'Cody'
    })

    console.log("\x1b[32m",`

      Seeding successful!
      Time to do stuff!

    `, "\x1b[0m")

    db.close()
  } catch (error) {
    console.error("\x1b[31m",'Oh noes! Something went wrong!','\n')
    console.error(err, "\x1b[0m")
    db.close()
  }
}

seed()
