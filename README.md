# @architecturex/devtools

This repository provides utility functions for generating Webpack configurations tailored to various environments (development, production, and common settings). The tools are designed to be flexible and are especially geared towards monorepo structures.

## Installation

`npm install @architecturex/devtools`

## Usage

### webpack.config.ts

```javascript
import {
  ConfigArgs,
  getWebpackCommonConfig,
  getWebpackDevelopmentConfig,
  getWebpackProductionConfig,
  log
} from '@architecturex/devtools'

import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'

import { name } from './package.json'

// Package Name
const [, packageName] = name.split('/')

// Mode Config
const getModeConfig = {
  development: getWebpackDevelopmentConfig,
  production: getWebpackProductionConfig
}

// Mode Configuration (development/production)
const modeConfig: (args: ConfigArgs) => Configuration = ({ mode }) => {
  const getWebpackConfiguration = getModeConfig[mode]

  return getWebpackConfiguration()
}

// Merging all configurations
const webpackConfig: (args: ConfigArgs) => Promise<Configuration> = async (
  { mode } = {
    mode: 'production'
  }
) => {
  const commonConfiguration = getWebpackCommonConfig({
    packageName,
    mode,
    isMonoRepo: false // If you have a MonoRepo, change it to true
  })

  // Mode Configuration
  const modeConfiguration = mode ? modeConfig({ mode }) : {}

  // Merging all configurations
  const webpackConfiguration = merge(commonConfiguration, modeConfiguration)

  // Logging Webpack Configuration
  log({ tag: 'Webpack Configuration', json: webpackConfiguration, type: 'warning' })

  return webpackConfiguration
}

export default webpackConfig
```

## Contribution

Feel free to suggest improvements, report issues, or contribute to enhancing these utilities. Your feedback and contributions are welcome!
