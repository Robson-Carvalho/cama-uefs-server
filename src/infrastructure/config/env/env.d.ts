declare namespace NodeJS {
  interface ProcessEnv {
    PORT?: number;
    MONGODB_URL?: string;
    FRONTEND_URL?: string;
  }
}
