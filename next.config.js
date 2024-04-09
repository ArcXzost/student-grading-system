const { native } = require('pg');

/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
    reactStrictMode: false,
    webpack: (config) => {
        config.resolve.fallback = { fs: false, module: false, child_process: false, http2: false, https: false, os: false, stream: false, tls: false, zlib: false, dns: false, pg_native: false};
        return config;
    }
}