/**
 * 
 * @desc 随机生成颜色
 * @return {String} 
 */
const randomColor = () => '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);

/**
 * 将 RGB 颜色值转换成十六进制颜色值
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 */
const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

/**
 * 将十六进制颜色值转换成 RGB 颜色值
 * @param {string} hex 
 */
const hexToRGB = hex => {
  let alpha = false,
    h = hex.slice(hex.startsWith('#') ? 1 : 0);
  if (h.length === 3) h = [...h].map(x => x + x).join('');
  else if (h.length === 8) alpha = true;
  h = parseInt(h, 16);
  return (
    'rgb' +
    (alpha ? 'a' : '') +
    '(' +
    (h >>> (alpha ? 24 : 16)) +
    ', ' +
    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
    ', ' +
    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
    (alpha ? `, ${h & 0x000000ff}` : '') +
    ')'
  );
};

module.exports = {
    randomColor,
    RGBToHex,
    hexToRGB
};