module.exports = {
  env: {
    test: {
      presets: [
        ['@babel/env', {
          targets: {
            node: 'current'
          }
        }]
      ],
      plugins: ['dynamic-import-node']
    }
  }
}
