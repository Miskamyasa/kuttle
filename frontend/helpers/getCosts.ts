export function getDailyCosts(horlyCost: number): string {
  return `$${Number((horlyCost) * 24).toFixed(2)} / day`
}

export function getMonthlyCosts(horlyCost: number): string {
  return `$${Number((horlyCost) * 24 * 30).toFixed(2)} / month`
}
