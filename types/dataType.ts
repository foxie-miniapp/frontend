export type User = {
  id: number
  first_name: string
  last_name: string
  username: string
  language_code: string
  allows_write_to_pm: boolean
}

export type WebAppParams = {
  query_id: string
  user: User
  auth_date: number
  hash: string
}
