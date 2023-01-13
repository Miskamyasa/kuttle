/**
 * Pre-start is where we want to place things that must run BEFORE the express
 * server is started. This is useful for environment variables, command-line
 * arguments, and cron-jobs.
 */

import fs from "fs"
import path from "path"

import dotenv from "dotenv"

// **NOTE** Do not import any local paths here, or any libraries dependent
// on environment variables.

try {
  const env = process.env.CROSS_ENV || "development"

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const filePath = path.join(__dirname, "../env/", `${env}.env`)
  if (!fs.existsSync(filePath)) {
    throw Error(`No env/${env}.env file`)
  }

  const f = fs.readFileSync(filePath)

  const envConfig = dotenv.parse(f)
  Object.entries(envConfig).forEach(([k, val]) => {
    if (!process.env[k]) {
      process.env[k] = val
    }
  })
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(err as string)
  process.exit(1)
}
