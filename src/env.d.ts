interface ImportMetaEnv {
    readonly VITE_UNSPLASH_ACCESS_KEY: string
    // сюда при желании можно добавить другие VITE_-переменные
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
