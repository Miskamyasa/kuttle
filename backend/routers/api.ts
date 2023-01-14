import {Router} from "express"

import getAllBlueprints from "../controllers/blueprints/getAllBlueprints"
import getAllAccounts from "../controllers/dashboard/getAllAccounts"


const apiRouter = Router()

apiRouter.get("/api/dashboard", getAllAccounts)

apiRouter.get("/api/blueprints", getAllBlueprints)

export default apiRouter
