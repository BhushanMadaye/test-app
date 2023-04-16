export interface LoginRequest {
  username: string,
  password: string
}

export interface LoginResponse {
  is_success: boolean
  data: Data
}

export interface Data {
  token: string
}
