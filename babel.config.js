module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  devServer: {
    proxy: 'https://pateden.netlify.app/',
}
};
