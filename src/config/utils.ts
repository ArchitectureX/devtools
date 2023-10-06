import fs from 'fs'

export function loadUserConfig(configPath: string): object {
  if (!fs.existsSync(configPath)) {
    return {}
  }

  const fileContents = fs.readFileSync(configPath, 'utf8')

  try {
    return JSON.parse(fileContents)
  } catch (err) {
    console.error(err)
    return {}
  }
}

export function deepMerge(target: any, source: any): object {
  for (const key in source) {
    if (source[key] instanceof Object && target[key]) {
      target[key] = deepMerge(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  }

  return target
}

export function mergeConfig(defaults: object, userConfig: object): object {
  return deepMerge({ ...defaults }, userConfig)
}
