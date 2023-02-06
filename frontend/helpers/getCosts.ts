export function getDailyCosts(hourlyPrice: number): string {
  return `$${Number((hourlyPrice) * 24).toFixed(2)} / day`
}

export function getMonthlyCosts(hourlyPrice: number): string {
  return `$${Number((hourlyPrice) * 24 * 30).toFixed(2)} / month`
}
