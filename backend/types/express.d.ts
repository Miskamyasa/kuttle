import "express"


declare module "express" {

  export interface Request {
    cookies: Record<string, string>
    signedCookies: Record<string, string>
  }
}

export {}
