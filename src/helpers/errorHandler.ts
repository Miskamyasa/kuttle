export default function errorHandler(err: unknown): void {
  // eslint-disable-next-line no-console
  console.warn(err)

  // TODO: Log error to some error logging service
}
