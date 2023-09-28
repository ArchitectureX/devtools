import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import getWebpackCommonConfig from './webpack.common'

describe('getWebpackCommonConfig', () => {
  it('should return a valid configuration object', () => {
    const config = getWebpackCommonConfig({
      packageName: 'sample-package'
    })

    expect(config).toHaveProperty('entry')
    expect(config).toHaveProperty('output')
    expect(config).toHaveProperty('resolve')
    expect(config).toHaveProperty('plugins')
    expect(config).toHaveProperty('module.rules')
    expect(config.target).toBe('node')
  })

  it('should correctly set the entry path based on package name', () => {
    const config = getWebpackCommonConfig({
      packageName: 'sample-package'
    })

    expect(config.entry).toContain('sample-package/src/index.ts')
  })

  it('should include BundleAnalyzerPlugin when isAnalyze is true', () => {
    const config = getWebpackCommonConfig({
      packageName: 'sample-package',
      isAnalyze: true
    })

    const hasBundleAnalyzerPlugin = config.plugins?.some(
      (plugin) => plugin instanceof BundleAnalyzerPlugin
    )
    expect(hasBundleAnalyzerPlugin).toBe(true)
  })

  it('should not include BundleAnalyzerPlugin when isAnalyze is false', () => {
    const config = getWebpackCommonConfig({
      packageName: 'sample-package',
      isAnalyze: false
    })

    const hasBundleAnalyzerPlugin = config.plugins?.some(
      (plugin) => plugin instanceof BundleAnalyzerPlugin
    )
    expect(hasBundleAnalyzerPlugin).toBe(false)
  })
})
