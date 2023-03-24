import http from "./http";
const CATEGORIES_API_URL = "categories"

export const getCategories = async () => {
  return await http.get(CATEGORIES_API_URL);
}
