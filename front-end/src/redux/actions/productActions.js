export function updateProduct(obj) {
  return {
    type: 'UPDATE',
    obj,
  };
}

export function removeProduct(payload) {
  return {
    type: 'REMOVE',
    payload,
  };
}
