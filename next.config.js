/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_DEPLOY_ENV === "github" ? '/portfolio' : '',
    output: process.env.NEXT_PUBLIC_DEPLOY_ENV === "github" || process.env.NEXT_PUBLIC_DEPLOY_ENV === "local" ? 'export' : 'standalone',
    images: {
        unoptimized: process.env.NEXT_PUBLIC_DEPLOY_ENV === "github" ? true : undefined
    }
}

module.exports = nextConfig
