module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    // const baz = obj?.foo?.bar?.baz;
    '@babel/plugin-proposal-optional-chaining',
  ],
};
