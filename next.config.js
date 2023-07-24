/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.DEPLOY_ENV === "github" ? '/next-portfolio' : '',
    output: process.env.DEPLOY_ENV === "github" || process.env.DEPLOY_ENV === "local" ? 'export' : 'standalone'
}

module.exports = nextConfig
