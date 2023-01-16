/* eslint-disable max-len */
import {NextFunction, Request, Response} from "express"

// https://dex.dev2.zbsnu.click/.well-known/openid-configuration
// clientID: a55fa608f63e792e16f9
// clientSecret: 528771e88b3613a9ac8d78c102d485c84b45ef81

//id: kuttle-backend
//secret: GENERATE_ME

// https://dex.dev2.zbsnu.click/auth/github?client_id=kuttle-backend&redirect_uri=http://localhost:3000/auth/callback&response_type=code&scope=openid profile email&state=I wish to wash my irish wristwatch
// https://dex.dev2.zbsnu.click/auth/github?client_id=kuttle-backend&clientSecret=GENERATE_ME&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fcallback&response_type=code&scope=openid+profile+email&state=kuttle-dex-state

export default function auth(req: Request, res: Response, next: NextFunction): void {
  next()
}
