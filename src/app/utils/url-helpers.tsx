export const stripPathname = (pathname: string) => {
  if (pathname.endsWith("/")) return pathname.slice(0, -1)
  return pathname
}

export const basePath: string = process.env.NEXT_PUBLIC_DEPLOY_ENV == 'github' ? '/portfolio' : ''
