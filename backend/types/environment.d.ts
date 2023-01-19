declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production"

      HOST: string
      PORT: number

      COOKIE_KEY: string
      COOKIE_SECRET: string
      COOKIE_EXP: number
    }
  }
}

export {}
