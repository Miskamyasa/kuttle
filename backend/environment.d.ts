declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production"
      PORT: number

      JET_LOGGER_MODE: "CONSOLE" | "FILE"
      JET_LOGGER_FILEPATH: string
      JET_LOGGER_TIMESTAMP: boolean
      JET_LOGGER_FORMAT: "LINE"
    }
  }
}

export {}
