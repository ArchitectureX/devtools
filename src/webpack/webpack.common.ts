import path from 'path'
import { Configuration } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import nodeExternals from 'webpack-node-externals'
import { ModeArgs } from './webpack.types'

const getWebpackCommonConfig = (args: ModeArgs): Configuration => {
  const { isAnalyze, analyzerPort = 9001, packageName, isPackage = true } = args

  const packagesPath = isPackage ? '/packages/' : '/../'

  // Client Entry
  const entry = path.resolve(__dirname, `../../../../..${packagesPath}${packageName}/src/index.ts`)

  // Resolve
  const resolve = {
    extensions: ['.*', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '~': path.resolve(__dirname, `../../../../..${packagesPath}${packageName}/src`)
    },
    fallback: {
      buffer: false,
      crypto: false,
      stream: false,
      querystring: false,
      os: false,
      zlib: false,
      http: false,
      https: false,
      url: false,
      path: require.resolve('path-browserify')
    }
  }

  // Output
  const output = {
    path: path.resolve(__dirname, `../../../../..${packagesPath}${packageName}/dist`),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'lib',
    umdNamedDefine: true,
    globalObject: 'this'
  }

  // Plugins
  const plugins = []

  if (isAnalyze) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerPort
      })
    )
  }

  // Rules
  const rules = []

  rules.push({
    test: /\.(tsx|ts)$/,
    exclude: /node_modules/,
    loader: 'ts-loader'
  })

  const webpackConfig = {
    entry,
    externals: [nodeExternals()],
    output,
    resolve,
    plugins,
    module: {
      rules
    },
    target: 'node'
  }

  return webpackConfig as Configuration
}

export default getWebpackCommonConfig
