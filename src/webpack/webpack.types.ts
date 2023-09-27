export type WebpackMode = 'production' | 'development'
export type ConfigArgs = {
  mode: WebpackMode
  packageName: string
}
export type ModeArgs = {
  packageName: string
  mode?: WebpackMode
  isAnalyze?: boolean
  port?: number
  analyzerPort?: number
  color?: string
  htmlOptions?: {
    title: string
    template: string
  }
}
