const presets = (api) => {
  return [
    [
      '@babel/preset-react',
      { runtime: 'automatic', development: api.env(['development']) },
    ],
    '@babel/preset-typescript'
  ]
}

const developmentPlugins = ['react-refresh/babel']

const plugins = (api) =>
  ['@babel/plugin-syntax-dynamic-import']
    .concat([api.env(['development']) && developmentPlugins])
    .filter(Boolean)

module.exports = (api) => {
  api.assertVersion(7)
  return {
    presets: presets(api),
    plugins: plugins(api),
  }
}
