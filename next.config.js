module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/system/all',
        permanent: true,
      },
    ]
  },
}