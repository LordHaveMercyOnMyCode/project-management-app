declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_BASE_URL: string;
    NEXT_PUBLIC_API_S3_BUCKET: string;
    NEXT_PUBLIC_COGNITO_USER_POOL_ID: string;
    NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID: string;
  }
}