export default {
  getCategories: ln => `category/${ln}/get-categories`,
  getProducts: ln => `products/${ln}/get-products/`,
  getSingleProduct: ln => `products/${ln}/get-product/`,
  login: 'auth/customer/login',
  getAddressList: 'customer/get-addresses',
  getCards: 'customer/get-card',
  AddOrder: ln => `customer/${ln}/add-to-order`,
  createChat: ln => `customer/${ln}/create-chat`,
  getMessages: 'customer/get-messages/',
  sendMessage: 'customer/send-message',
  getConversations: 'customer/en-US/conversations',
  getOrders: 'customer/my-orders',
  getOrderHistory: 'customer/orders-history',
  getOrderDetails: 'customer/order-detail/',
};
