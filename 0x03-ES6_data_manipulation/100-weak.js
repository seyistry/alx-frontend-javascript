let num = 0;
export const weakMap = new WeakMap();

export function queryAPI(obj) {
  if (weakMap.has(obj)) {
    if (num >= 5) throw new Error('Endpoint load is high');
    weakMap.set(obj, (num += 1));
  } else {
    num = 1;
    weakMap.set(obj, num);
  }
}
