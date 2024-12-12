import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import fs from 'fs';
import path from 'path';

// Viteプラグインでマニフェストファイルを生成
function generateManifestPlugin() {
  return {
    name: 'generate-manifest', // プラグインの名前
    generateBundle(options, bundle) {
      const manifest = {};

      for (const fileName in bundle) {
        if (bundle[fileName].type === 'asset') {
          manifest[fileName] = bundle[fileName].fileName;
        }
      }

      // マニフェストファイルを保存
      fs.writeFileSync(
        path.resolve(options.dir, 'asset-manifest.json'),
        JSON.stringify(manifest, null, 2)
      );
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    generateManifestPlugin() // プラグインを追加
  ],
  build: {
    outDir: 'build', // 出力ディレクトリ
  }
});