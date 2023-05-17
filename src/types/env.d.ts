/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MRT_REAL_TIME_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
