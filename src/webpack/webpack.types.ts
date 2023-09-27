export type WebpackMode = 'production' | 'development'
export type ConfigArgs = {
  mode: WebpackMode
}
export type ModeArgs = {
  packageName: string
  mode?: WebpackMode
  isPackage?: boolean
  isAnalyze?: boolean
  port?: number
  analyzerPort?: number
  color?: string
  htmlOptions?: {
    title: string
    template: string
  }
}
