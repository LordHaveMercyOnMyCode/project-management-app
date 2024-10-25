const hostnames = [
  "kaii-s3.s3.ap-south-1.amazonaws.com",
  "ih1.redbubble.net",
  "encrypted-tbn0.gstatic.com",
  "docs.amplify.aws",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;
