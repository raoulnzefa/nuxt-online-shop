import productsService from '../api/services/productsService';

export const state = () => ({
   currentPage: 1,
   totalItems: 1,
   isLoading: false,
   products: [
      {
         title: 'dwa',
         id: 1
      }
   ]
})

export const mutations = {
   LOAD_PRODUCTS(state, payload) {
      state.products = [...payload.products];
      state.currentPage = payload.currentPage
   },
   TOGGLE_LOADING(state, payload) {
      state.isLoading = payload.isLoading
   }
}

export const actions = {
   async LOAD_PRODUCTS(context, page) {
      context.commit({
         type: 'TOGGLE_LOADING',
         isLoading: true
      });
      const products = await productsService.getProductsList(page);
      context.commit({
         type: 'LOAD_PRODUCTS',
         products: products.data,
         currentPage: products.current_page
      });
      context.commit({
         type: 'TOGGLE_LOADING',
         isLoading: false
      });
   },
}