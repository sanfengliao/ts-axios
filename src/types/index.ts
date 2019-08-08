export type Method = 'get' | 'post' | 'put' | 'delete' | 'head' | 'options' | 'patch'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  param?: any
}
