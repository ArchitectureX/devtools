import getWebpackProductionConfig from './webpack.production'

describe('getWebpackProductionConfig', () => {
  it('should return a configuration object with production mode', () => {
    const config = getWebpackProductionConfig()
    expect(config.mode).toBe('production')
  })

  it('should return a configuration object without source-map devtool', () => {
    const config = getWebpackProductionConfig()
    expect(config.devtool).toBe(false)
  })

  it('should define externals for react', () => {
    const config = getWebpackProductionConfig()
    expect(config.externals).toHaveProperty('react')
  })

  it('should define externals for react-dom', () => {
    const config = getWebpackProductionConfig()
    expect(config.externals).toHaveProperty('react-dom')
  })

  it('should define externals for jsonwebtoken', () => {
    const config = getWebpackProductionConfig()
    expect(config.externals).toHaveProperty('jsonwebtoken')
  })
})
