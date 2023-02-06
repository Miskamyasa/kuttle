import path from "path"

import express, {Express} from "express"
// import {auth} from "express-openid-connect"
import helmet from "helmet"
// import Knex from "knex"
import {createServer as createViteServer} from "vite"

// import knexConfig from "../knexfile"

import apiRouter from "./routers/api"


const {NODE_ENV} = process.env

const publicDir = path.resolve(__dirname, "public")

function resolve(filename: string): string {
  return path.resolve(publicDir, `${filename}.html`)
}

export default async function createServer(): Promise<Express> {
  const app = express()

  // const knex = Knex(knexConfig[NODE_ENV])

  if (NODE_ENV === "production") {
    app.use(helmet())
  }

  app.use(express.urlencoded({extended: false}))
  app.use(express.json())

  if (NODE_ENV === "production") {
    // app.use(auth({
    //   idpLogout: true,
    //   authorizationParams: {
    //     response_type: "code",
    //     scope: "openid profile email groups",
    //   },
    //   routes: {
    //     callback: "/auth/callback",
    //   },
    // }))
  }

  app.use(apiRouter)

  if (NODE_ENV === "development") {
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

  return app
}
