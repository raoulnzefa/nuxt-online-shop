import productsService from '../api/services/productsService';

export const state = () => ({
   isLoading: false,
   data: {}
})

export const mutations = {
   SET_PRODUCT(state, payload) {
      state.data = { ...payload.product };
   },
   TOGGLE_LOADING(state, payload) {
      state.isLoading = payload.isLoading
   }
}

export const actions = {
   async GET_PRODUCT(context, id) {
      context.commit({
         type: 'TOGGLE_LOADING',
         isLoading: true
      });
      const product = await productsService.getProductById(id);
      context.commit({
         type: 'SET_PRODUCT',
         product,
      });
      context.commit({
         type: 'TOGGLE_LOADING',
         isLoading: false
      });
   },
}