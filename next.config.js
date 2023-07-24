/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.DEPLOY_ENV === "github" ? '/next-portfolio' : '',
    output: process.env.DEPLOY_ENV === "github" || process.env.DEPLOY_ENV === "local" ? 'export' : 'standalone',
    images: {
        unoptimized: process.env.DEPLOY_ENV === "github" ? true : undefined
    }
}

module.exports = nextConfig
