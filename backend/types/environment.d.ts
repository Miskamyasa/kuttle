declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production"
      PORT: number

      JET_LOGGER_MODE: "CONSOLE" | "FILE"
      JET_LOGGER_FILEPATH: string
      JET_LOGGER_TIMESTAMP: boolean
      JET_LOGGER_FORMAT: "LINE"

      COOKIE_DOMAIN: string
      COOKIE_PATH: string
      COOKIE_SECRET: string
      COOKIE_KEY: string
      COOKIE_EXP: number
      SECURE_COOKIE: boolean
      JWT_SECRET: string
    }
  }
}

export {}
