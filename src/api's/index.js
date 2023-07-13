const { default: axiosInstance } = require('../utils/axios');

export const getAllSkills = async () =>{
  const res = await axiosInstance.get('/skills')
  return res
}
// export const createAsset = async (body) => {
//   const res = await axiosInstance.post('/assets', body);
//   return res;
// };
// export const createExpenseCategory = async (body) => {
//   const res = await axiosInstance.post('/expense_heads', body);
//   return res;
// };
// export const createTransaction = async (body) => {
//   const res = await axiosInstance.post('/transactions', body);
//   return res;
// };
// export const getAllTransactions = async () => {
//   const res = await axiosInstance.get('/transactions');
//   return res;
// };
// export const getAllExpenseCategories = async () => {
//   const res = await axiosInstance.get('/expense_heads');
//   return res;
// };
// export const getAllAssets = async () => {
//   const res = await axiosInstance.get('/assets');
//   return res;
// };
// export const  getAllCategories = async () =>{
//   const res = await axiosInstance.get('/categories')
//   return res
// }
// export const  getCategoryById = async (id) =>{
//   const res = await axiosInstance.get(`/categories/${id}`)
//   return res
// }
// export const  createCategory = async (body) =>{
//   const res = await axiosInstance.post('/categories',body)
//   return res
// }
// export const  updateCategory = async (id,body) =>{
//   const res = await axiosInstance.put(`/categories/${id}`,body)
//   return res
// }
// export const  createProduct = async (body) =>{
//   const res = await axiosInstance.post('/products',body)
//   return res
// }
// export const  getAllProducts = async () =>{
//   const res = await axiosInstance.get('/products')
//   return res
// }
// export const  getProductById = async (id) =>{
//   const res = await axiosInstance.get(`/products/${id}`)
//   return res
// }
// export const  updateProduct = async (id,body) =>{
//   console.log(body)
//   const res = await axiosInstance.put(`/products/${id}`,body)
//   return res
// }