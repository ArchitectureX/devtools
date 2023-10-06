import { Configuration } from 'webpack'
import nodeExternals from 'webpack-node-externals'

const getWebpackProductionConfig = (): Configuration => {
  // Externals
  const customExternals = {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    },
    jsonwebtoken: 'jsonwebtoken'
  }

  const externals = [
    nodeExternals({
      allowlist: Object.keys(customExternals)
    }),
    customExternals
  ]

  const webpackConfig = {
    mode: 'production',
    devtool: false,
    externals
  }

  return webpackConfig as Configuration
}

export default getWebpackProductionConfig
