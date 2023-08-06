/* config-overrides.js */

const { override, useBabelRc } = require("customize-cra");

module.exports = override(
  // Cấu hình webpack tại đây 

  // Dùng file .babelrc
  useBabelRc()

);