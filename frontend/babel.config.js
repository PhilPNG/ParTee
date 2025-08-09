module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      // React Native Worklets plugin must come last
      require.resolve('react-native-worklets/plugin'),
    ],
  };
};
