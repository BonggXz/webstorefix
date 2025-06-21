let ORDERS = [
  {
    _id: '1',
    product: { _id: '1', name: 'Sample Product' },
    amount: 10000,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
];
export function getOrders() {
  return ORDERS;
}
export function findOrder(id) {
  return ORDERS.find(o => o._id === id);
}
export function addOrder(order) {
  ORDERS.push(order);
}
export function removeOrder(id) {
  const idx = ORDERS.findIndex(o => o._id === id);
  if (idx !== -1) {
    ORDERS.splice(idx, 1);
    return true;
  }
  return false;
}
