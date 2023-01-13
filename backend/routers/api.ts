import {Router} from "express"

import dashboardJson from "../../__mocks__/dashboard.json"


const apiRouter = Router()

apiRouter.get("/api/dashboard", (req, res) => {
  res.json(dashboardJson)
})

export default apiRouter
