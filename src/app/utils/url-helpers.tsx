export const stripPathname = (pathname: string) => {
  if (pathname.endsWith("/")) return pathname.slice(0, -1)
  return pathname

}