import "./init"

import path from "path"

import express from "express"
import helmet from "helmet"
import {createServer as createViteServer} from "vite"

import showError from "./middlewares/showError"
import apiRouter from "./routers/api"


const publicDir = path.resolve(__dirname, "public")

function resolve(filename: string): string {
  return path.resolve(publicDir, `${filename}.html`)
}

async function createServer(): Promise<void> {
  const app = express()

  if (process.env.NODE_ENV === "production") {
    app.use(helmet())
  }

  app.use(express.urlencoded({extended: false}))
  app.use(express.json())

  app.use(express.static(publicDir))

  app.use(apiRouter)

  // Frontend Development Vite static server middleware
  if (process.env.NODE_ENV === "development") {
    // Create Vite server in middleware mode
    const vite = await createViteServer({
      server: {middlewareMode: true},
      appType: "spa", // don't include Vite's default HTML handling middlewares
    })
    // Use vite's connect instance as middleware
    app.use(vite.middlewares)
  }

  app.get("*", (req, res) => {
    res.sendFile(resolve("index"))
  })

  app.use(showError)

  const port: number = process.env.PORT

  app.listen(process.env.PORT, () => {
    const str = `★ ★ ★ ★   SERVER STARTED ON PORT ${port}   ★ ★ ★ ★`
    const separator = Array(str.length + 1).join("―")
    /* eslint-disable no-console */
    console.log(separator)
    console.log(str)
    console.log(separator)
    /* eslint-disable no-console */
  })
}

void createServer()
