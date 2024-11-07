import html, { defaultMinifyOptions } from 'bun-plugin-html'
import { $ } from 'bun'
import path from 'path'
import postcss from 'postcss'
import tailwindcss from 'tailwindcss';
import twconfig from './tailwind.config.js'
import autoprefixer from 'autoprefixer';

await $`rm -rf ./dist`

await Bun.build({
    entrypoints: ['src/index.html'],
    outdir: 'dist',
    naming: '[dir]/[name].[ext]',
    plugins: [html({
        async preprocessor(processor) {
            const files = processor.getFiles();

            for (const file of files) {
                if (file.extension == '.css') {
                    const contents = await postcss([
                        tailwindcss(twconfig),
                        autoprefixer(),
                    ])
                        .process(await file.content, { from: undefined })
                    processor.writeFile(file.path, contents.css);
                }
            }
        },
    })]
})
