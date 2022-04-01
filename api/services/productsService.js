import instance from "../apiConfig";

//api endpoints
const endpoints = {
   products: (page) => `category?page=${page}`,
   productById: (productId) => `category/${productId}`
}

//api requests
const productsService = {
   async getProductsList(page) {
      const response = await instance.get(endpoints.products(page));
      return response.data;
   },
   async getProductById(productId) {
      const response = await instance.get(endpoints.products(productId));
      return response.data;
   }
}


export default productsService;