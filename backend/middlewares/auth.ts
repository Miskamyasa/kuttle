import {NextFunction, Request, Response} from "express"

// https://dex.dev2.zbsnu.click/.well-known/openid-configuration

export default function auth(req: Request, res: Response, next: NextFunction): void {
  next()
}
