export function findByAttribute(wrapper, id) {
  return wrapper.find(`[data-test='${id}']`);
}
