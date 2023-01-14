import path from "path"

import cookieParser from "cookie-parser"
import express, {Express} from "express"
import helmet from "helmet"
import {createServer as createViteServer} from "vite"

import auth from "./middlewares/auth"
import showError from "./middlewares/showError"
import apiRouter from "./routers/api"


const publicDir = path.resolve(__dirname, "public")

function resolve(filename: string): string {
  return path.resolve(publicDir, `${filename}.html`)
}

export default async function createServer(): Promise<Express> {
  const app = express()

  if (process.env.NODE_ENV === "production") {
    app.use(helmet())
  }

  app.use(express.urlencoded({extended: false}))
  app.use(express.json())
  app.use(cookieParser(process.env.COOKIE_SECRET))

  if (process.env.CROSS_ENV === "miskamyasa") {
    app.use(auth)
  }

  app.use(apiRouter)

  if (process.env.NODE_ENV === "development") {
    const vite = await createViteServer({
      server: {middlewareMode: true},
      appType: "spa",
    })
    app.use(vite.middlewares)
  }

  app.use(express.static(publicDir))

  app.get("*", (req, res) => {
    res.sendFile(resolve("index"))
  })

  app.use(showError)

  return app
}
