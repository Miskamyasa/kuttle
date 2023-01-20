type HSL = [number, number, number]

function getHashOfString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  hash = Math.abs(hash)
  return hash
}

function normalizeHash(hash: number, min: number, max: number): number {
  return Math.floor((hash % (max - min)) + min)
}

function generateHSL(name: string): HSL {
  const hash = getHashOfString(name)
  const hue = normalizeHash(hash, 110, 250)
  const saturation = normalizeHash(hash, 40, 70)
  const lightness = normalizeHash(hash, 5, 55)
  return [hue, saturation, lightness]
}

function HSLtoString(hsl: HSL): string {
  return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`
}

export default function getAvatarColor(name?: string | null): string {
  if (!name) {
    return "#000"
  }
  return HSLtoString(generateHSL(name))
}
