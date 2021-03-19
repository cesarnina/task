const db = require('./server/db/database')
const Todo = require('./server/db/models/Todo')

const seed = async () => {
  try {
    await db.sync({force: true})

    await Todo.create({
      taskName: 'Collect coins',
      assignee: 'Luigi'
    })

    await Todo.create({
      taskName: 'Save the princess',
      assignee: 'Mario'
    })

    await Todo.create({
      taskName: 'Collect rings',
      assignee: 'Sonic'
    })

    await Todo.create({
      taskName: 'Take over world',
      assignee: 'Pinky and the Brain'
    })

    console.log("\x1b[32m%s\x1b[0m",`

      Seeding successful!
      Time to do stuff!

    `)

    db.close()

  } catch (error) {
      console.error("\x1b[31m",'Oh noes! Something went wrong!','\n')
      console.error(error, "\x1b[0m")

      db.close()
  }
}

seed()
