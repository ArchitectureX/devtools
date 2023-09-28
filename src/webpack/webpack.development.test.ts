import { HotModuleReplacementPlugin, NoEmitOnErrorsPlugin } from 'webpack'

import getWebpackDevelopmentConfig from './webpack.development'

describe('getWebpackDevelopmentConfig', () => {
  it('should return a configuration object with development mode', () => {
    const config = getWebpackDevelopmentConfig()
    expect(config.mode).toBe('development')
  })

  it('should return a configuration object with source-map devtool', () => {
    const config = getWebpackDevelopmentConfig()
    expect(config.devtool).toBe('source-map')
  })

  it('should include HotModuleReplacementPlugin', () => {
    const config = getWebpackDevelopmentConfig()
    const hasHotModuleReplacementPlugin = config.plugins?.some(
      (plugin) => plugin instanceof HotModuleReplacementPlugin
    )
    expect(hasHotModuleReplacementPlugin).toBe(true)
  })

  it('should include NoEmitOnErrorsPlugin', () => {
    const config = getWebpackDevelopmentConfig()
    const hasNoEmitOnErrorsPlugin = config.plugins?.some(
      (plugin) => plugin instanceof NoEmitOnErrorsPlugin
    )
    expect(hasNoEmitOnErrorsPlugin).toBe(true)
  })
})
