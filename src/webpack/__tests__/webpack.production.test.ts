import { describe, expect, it } from '@jest/globals'

import getWebpackProductionConfig from '../webpack.production'

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

    if (Array.isArray(config.externals)) {
      expect(config.externals[1]).toHaveProperty('react')
    }
  })

  it('should define externals for react-dom', () => {
    const config = getWebpackProductionConfig()

    if (Array.isArray(config.externals)) {
      expect(config.externals?.[1]).toHaveProperty('react-dom')
    }
  })

  it('should define externals for jsonwebtoken', () => {
    const config = getWebpackProductionConfig()

    if (Array.isArray(config.externals)) {
      expect(config.externals?.[1]).toHaveProperty('jsonwebtoken')
    }
  })
})
