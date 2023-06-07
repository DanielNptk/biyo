/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './utils/supabaseImageLoader.js',
    },
}

module.exports = nextConfig
