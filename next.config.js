/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "vi.wizcase.com"
        },

        ]

    }
}

module.exports = nextConfig
