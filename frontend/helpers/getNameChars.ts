export default function getNameChars(str?: string | null): string {
  if (typeof str !== "string") {
    return "XY"
  }
  const [fname = "X", sname = ""] = str.split(" ")
  if (!sname) {
    return fname.substring(0, 2).toUpperCase()
  }
  return fname.charAt(0).toUpperCase() + sname.charAt(0).toUpperCase()
}
