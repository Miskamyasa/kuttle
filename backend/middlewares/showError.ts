import {NextFunction, Request, Response} from "express"


export default function showError(error: Error, req: Request, res: Response, next: NextFunction): void {
  console.error(error.message)

  if (res.headersSent) {
    return next(error)
  }

  if (process.env.NODE_ENV === "production") {
    // eslint-disable-next-line
    error.stack = "";
  }

  res.status(500)
  res.send(error.message)
}
