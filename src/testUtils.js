export function findByAttribute(wraper, id) {
  return wraper.find(`[data-test='${id}']`);
}
