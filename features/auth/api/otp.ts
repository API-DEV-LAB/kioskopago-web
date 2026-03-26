import API from '@/lib/axios'
import { OtpRequestProps, OtpVerifyProps, AuthResponse, OtpRequestResponse } from '@/features/auth/types/types'

export async function requestOtp(data: OtpRequestProps): Promise<OtpRequestResponse> {
  const response = await API.post<OtpRequestResponse>('/auth/otp/request', data)
  return response.data
}

export async function verifyOtp(data: OtpVerifyProps): Promise<AuthResponse> {
  const response = await API.post<AuthResponse>('/auth/otp/verify', data)
  return response.data
}

export async function resendOtp(data: OtpRequestProps): Promise<OtpRequestResponse> {
  const response = await API.post<OtpRequestResponse>('/auth/otp/resend', data)
  return response.data
}
