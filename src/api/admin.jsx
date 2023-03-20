import http from "./http";

const ADMIN_CATEGORIES = "admin/categories";
const SHOP_ACCOUNT = "admin/shops";

export const getAdminCategories = async () => {
    return await http.get(ADMIN_CATEGORIES);
}

export const addNewCategory = async (category) => {
    return await http.post(`${ADMIN_CATEGORIES}`, {
        name: category.name
    });
}

export const updateShopProduct = async (category) => {
    return await http.patch(`${ADMIN_CATEGORIES}/${category.id}`, {
        name: category.name,
    })
}

export const deleteCategory = async (id) => {
    return await http.delete(`${ADMIN_CATEGORIES}/${id}`);
}


export const getShopOwnerAccounts = async () => {
    return await http.get(SHOP_ACCOUNT);
}