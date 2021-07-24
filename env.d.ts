export interface IProcessEnv {
  NEXT_PUBLIC_STAGE: "dev" | "prod";
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends IProcessEnv {}
  }
}
