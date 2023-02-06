export default function getTimeDiffInPercent(startDate: Date, finishDate: Date): number {
  const now = Date.now()

  const t1 = new Date(startDate).getTime()
  const t2 = new Date(finishDate).getTime()

  return Math.min(100, Math.max(0, ((now - t1) / (t2 - t1)) * 100))
}
