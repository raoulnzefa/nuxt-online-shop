export const state = () => ({
   cartItems: []
})

export const getters = {
   getCartItemsLength: (state) => {
      return state.cartItems.length
   },
   checkItemIsInCart: (state) => (id) => {
      return state.cartItems.some(item => item.id === id);
   }
}

export const mutations = {
   INIT_CART_ITEMS(state, payload) {
      state.cartItems = [...payload.products];
   },
   ADD_ITEM_TO_CART(state, payload) {
      state.cartItems.push({ ...payload.data });
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems, null, 0))
   },
   DELETE_ITEM_FROM_CART(state, payload) {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload.id);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems, null, 0))
   }
}

export const actions = {
   async INIT_CART_ITEMS(context) {
      let cartItems = [];
      if (localStorage.getItem('cartItems') === null) {
         localStorage.setItem('cartItems', '[]')
      } else {
         cartItems = JSON.parse(localStorage.getItem('cartItems'));
      }
      context.commit({
         type: 'INIT_CART_ITEMS',
         products: cartItems
      });
   },
   ADD_ITEM_TO_CART(context, data) {
      context.commit({
         type: 'ADD_ITEM_TO_CART',
         data
      });
   },
   DELETE_ITEM_FROM_CART(context, id) {
      context.commit({
         type: 'DELETE_ITEM_FROM_CART',
         id
      });
   }
}