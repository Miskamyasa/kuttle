import express from "express"


const apiRouter = express.Router()

apiRouter.get("/api/dashboard", (req, res) => {
  res.json([])
})

export default apiRouter
