# Typescript Tutorial

## Initialize 

### Make npm project

```bash
$ npm init
```

### install typescript and make config

```bash
$ npm install --save-dev typescript
$ ./node_modules/.bin/tsc --init
```

initialize `tsconfig.json`.

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true
    },
    "include": [
        "./ts/**/*.ts"
    ]
}
```


### install Webpack

```bash
$ npm install --save-dev webpack webpack-cli ts-loader
```

initialize `webpack.config.js`.

```js
const path = require('path');

module.exports = {
// モード値を production に設定すると最適化された状態で、
// development に設定するとソースマップ有効でJSファイルが出力される
mode: 'development', // "production" | "development" | "none"

// メインとなるJavaScriptファイル（エントリーポイント）
entry: './ts/index.ts',

output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
},

module: {
    rules: [{
    // 拡張子 .ts の場合
    test: /\.ts$/,
    // TypeScript をコンパイルする
    use: 'ts-loader'
    }]
},
// import 文で .ts ファイルを解決するため
resolve: {
    modules: [
    "node_modules", // node_modules 内も対象とする
    ],
    extensions: [
    '.ts',
    '.js' // node_modulesのライブラリ読み込みに必要
    ]
}
};
```

### make npm script
add build script
```json
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
+   "tsc": "tsc",    
+   "build": "webpack"
  },
}
```

