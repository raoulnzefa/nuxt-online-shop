import productsService from '../api/services/productsService';

export const state = () => ({
   itemPerPage: 30,
   currentPage: 1,
   totalItems: 1,
   isLoading: true,
   products: []
})

export const getters = {
   currentPage: (state) => {
      return state.currentPage;
   },
   paginatorLength: (state) => {
      return Math.ceil(state.totalItems / state.itemPerPage);
   },
   products: (state) => {
      return state.products;
   },
   isLoading: (state) => {
      return state.isLoading;
   }
}

export const mutations = {
   LOAD_PRODUCTS(state, payload) {
      state.products = [...payload.products];
      state.totalItems = payload.totalItems
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
         currentPage: products.current_page,
         totalItems: products.total
      });
      context.commit({
         type: 'TOGGLE_LOADING',
         isLoading: false
      });
   },
}