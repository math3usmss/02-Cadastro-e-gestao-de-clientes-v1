const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = function (options, rspack) {
  return {
    ...options,
    entry: ['@rspack/core/hot/poll?100', options.entry],
    externals: [
      nodeExternals({
        allowlist: ['@rspack/core/hot/poll?100'],
      }),
    ],
    resolve: {
      ...options.resolve,
      extensionAlias: {
        '.js': ['.ts', '.js'],
      },
    },
    plugins: [
      ...options.plugins,
      new rspack.HotModuleReplacementPlugin(),
      new RunScriptWebpackPlugin({
        name: options.output.filename,
        autoRestart: false,
      }),
    ],
    watchOptions: {
      poll: 100,
    },
  };
};
