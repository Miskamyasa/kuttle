import "./init"
import createServer from "./app"


const serverPromise = createServer()

const port: number = process.env.PORT

void serverPromise.then(app => {
  app.listen(process.env.PORT, () => {
    const str = `★ ★ ★ ★   SERVER STARTED ON PORT ${port}   ★ ★ ★ ★`
    const separator = Array(str.length + 1).join("―")
    /* eslint-disable no-console */
    console.log(separator)
    console.log(str)
    console.log(separator)
    /* eslint-disable no-console */
  })
})
