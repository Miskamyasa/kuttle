import {Router} from "express"

import dashboardJson from "../__mocks__/dashboard.json"


const apiRouter = Router()

apiRouter.use((req, res, next) => {
  // console.log({oidc: req.oidc, user: req.oidc.user})
  next()
})

apiRouter.get("/api/dashboard", (req, res): void => {
  res.json(dashboardJson)
})

apiRouter.get("/api/blueprints", (req, res): void => {
  res.json([])
})

export default apiRouter
