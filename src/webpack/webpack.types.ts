export type WebpackMode = 'production' | 'development'
export type ConfigArgs = {
  mode: WebpackMode
}
export type ModeArgs = {
  packageName: string
  mode?: WebpackMode
  isMonoRepo?: boolean
  isAnalyze?: boolean
  port?: number
  analyzerPort?: number
}
