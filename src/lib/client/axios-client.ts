import axios, { AxiosError, AxiosResponse } from 'axios'

import { appConfigs } from '@/config/app-config'

import { StorageKey } from '../constants/storage'
import { getStorageData, removeStorageData } from '../helpers/storage'

const axiosClient = axios.create({
  baseURL: appConfigs.apiURL
})

axiosClient.interceptors.request.use(
  (config) => {
    const token = getStorageData<string>(StorageKey.ACCESS_TOKEN)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => handleResponse(response),
  async (error: AxiosError) => handleErrorResponse(error)
)

const handleResponse = (response: AxiosResponse) => response

const handleErrorResponse = async (
  error: AxiosError
): Promise<AxiosResponse | undefined> => {
  const originalRequest = error.config
  if (error.response?.status === 401 && originalRequest) {
    removeStorageData(StorageKey.ACCESS_TOKEN)
    window.location.href = '/'
  }

  return Promise.reject(handleError(error))
}

const handleError = (error: AxiosError) => {
  console.error(error)
  const responseData = error.response?.data
  return {
    code: error.response?.status,
    ...(typeof responseData === 'object' && responseData !== null
      ? responseData
      : {})
  }
}

export default axiosClient
