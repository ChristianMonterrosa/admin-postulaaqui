import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                // Definir carpetas para los archivos CSS y JS
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'css/[name].[hash].[ext]'; // Guarda CSS en /css
                    }
                    return 'assets/[name].[hash].[ext]'; // Otros archivos en /assets
                },
                entryFileNames: 'js/[name].[hash].js', // Guarda JS en /js
                chunkFileNames: 'js/[name].[hash].js', // Guarda chunks de JS en /js
            },
        },
    },
});
