export interface IProcessEnv {
  NEXT_PUBLIC_STAGE: "dev" | "prod";
  NEXT_PUBLIC_DOMAIN: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends IProcessEnv {}
  }
}
