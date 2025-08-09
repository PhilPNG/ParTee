module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      [
        'babel-preset-expo',
        {
          // Disable auto-adding the deprecated Reanimated plugin
          reanimated: false,
        },
      ],
    ],
    plugins: [
      'nativewind/babel',
      // React Native Worklets plugin must come last
      'react-native-worklets/plugin',
    ],
  };
};
