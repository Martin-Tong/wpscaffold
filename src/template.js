exports.base = {
    webpackOptions: {
        mode: `process.env.production ? "production" : "development"`,
        entry: "'index.js'",
        output: {
            path: "path.resolve(__dirname, 'dist')",
            filename: `process.env.production ? "[chunkhash:8].file.js" : "[name].file.js"`,
        }
    },
    topScope: [
        'const path = require("path")'
    ]
}