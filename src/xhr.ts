import { AxiosRequestConfig } from './types'

function xhr(config: AxiosRequestConfig): void {
  const { url, method = 'get', data = null } = config
  const xhr = new XMLHttpRequest()
  xhr.open(method.toUpperCase(), url, true)
  xhr.send(data)
}

export default xhr
