/* eslint-env node */
/* eslint func-names: 0 */
/* eslint global-require: 0 */
/* eslint-disable @typescript-eslint/no-var-requires */
const { configure } = require('quasar/wrappers');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = configure((ctx) => ({
  supportTS: {
    tsCheckerConfig: {
      eslint: true,
    },
  },

  boot: [
    'axios',
  ],

  css: [
    'app.scss',
  ],

  extras: [
    'fontawesome-v5',
    'roboto-font',
    'material-icons',
  ],

  build: {
    distDir: 'docs',
    vueRouterMode: 'history',
    preloadChunks: true,
    showProgress: false,
    gzip: true,
    analyze: true,
    extractCSS: true,

    extendWebpack(cfg) {
      cfg.resolve.alias = {
        ...cfg.resolve.alias,
        'css': path.resolve(__dirname, 'src/css'),
        'router': path.resolve(__dirname, 'src/router'),
        'statics': path.resolve(__dirname, 'src/public'),
        'store': path.resolve(__dirname, 'src/store'),
      };
      cfg.module.rules.push({
        test: /\.pug$/,
        loader: 'pug-plain-loader',
        exclude: /node_modules/,
      });
      if (ctx.prod) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        });
      }
    },
  },

  devServer: {
    https: true,
    port: 3000,
    open: false,
  },

  framework: {
    iconSet: 'fontawesome-v5',
    lang: 'en-us',
    config: {},

    importStrategy: 'auto',

    plugins: [
      'Meta',
    ],
  },

  animations: [],

  ssr: {
    pwa: false,
  },

  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {},
    manifest: {
      name: 'Alamgir Hossain - Portfolio',
      short_name: 'Alamgir Hossain - Portfolio',
      description: 'A portfolio website for Alamgir Hossain',
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#ffffff',
      theme_color: '#027be3',
      icons: [
        {
          src: 'icons/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png',
        },
        {
          src: 'icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/icon-256x256.png',
          sizes: '256x256',
          type: 'image/png',
        },
        {
          src: 'icons/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: 'icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },

  cordova: {
  },

  capacitor: {
    hideSplashscreen: true,
  },

  electron: {
    bundler: 'packager',

    packager: {
    },

    builder: {
      appId: 'portfolio',
    },

    nodeIntegration: true,

    extendWebpack(/* cfg */) {
      // do something with Electron main process Webpack cfg
      // chainWebpack also available besides this extendWebpack
    },
  },
}));
