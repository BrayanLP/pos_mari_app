module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './src/assets',
            models: './src/models',
            utils: './src/utils',
            screens: './src/views',
            components: './src/components',
            // modules: './src/modules',
            // lib: './src/lib',
            // types: './src/types',
            // constants: './src/constants',
          },
        },
      ],
    ]
  };
};
