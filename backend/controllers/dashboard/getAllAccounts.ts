import {Response, Request} from "express"

import dashboardJson from "../../../__mocks__/dashboard.json"


export default function getAllAccounts(req: Request, res: Response): void {
  res.json(dashboardJson)

}
