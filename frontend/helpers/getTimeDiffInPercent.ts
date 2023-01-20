export default function getTimeDiffInPercent(startTS: number, finishTS: number): number {
  const now = Date.now()

  const t1 = startTS * 1000
  const t2 = finishTS * 1000

  return Math.min(100, Math.max(0, ((now - t1) / (t2 - t1)) * 100))
}
