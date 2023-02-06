import toast from "react-hot-toast"


export default function errorHandler(err: unknown): void {
  const {message} = err as {message: string}
  console.warn(err)

  toast.error(message)

  // TODO: Log error to some error logging service
}
