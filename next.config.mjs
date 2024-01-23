/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@storefront-ui/react'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
