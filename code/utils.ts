export const setAttribute = (target, attribute = {}) => {
  let keys = Object.keys(attribute);
  keys.forEach(key => (console.log(attribute[key]),target[key] = attribute[key]));
}