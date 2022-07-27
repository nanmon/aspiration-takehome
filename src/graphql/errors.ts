export interface BadCredentialsNetworkError extends Error {
  statusCode: 401;
  result: {
    message: string;
    documentation_url: string;
  }
}

export function isBadCredentialsNetworkError(error: Error | null): error is BadCredentialsNetworkError {
  return error != null
    && 'statusCode' in error 
    && (error as BadCredentialsNetworkError).statusCode === 401;
}