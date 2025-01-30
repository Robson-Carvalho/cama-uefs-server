declare namespace NodeJS {
  interface ProcessEnv {
    PORT?: number;
    MONGODB_URL?: string;
    FRONTEND_URL?: string;
    NODEMAILER_EMAIL_USER?: string;
    NODEMAILER_PASSWORD?: string;
  }
}
