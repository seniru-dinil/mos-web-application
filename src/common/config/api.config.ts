const API_BASE_URL: string = "http://localhost:8080/api";

const API_ENDPOINTS = {
    GET_CUSTOMER: "/customer",
    GET_CUSTOMER_LIST: "/customer/list",
    DELETE_CUSTOMER: "/customer",
    UPDATE_CUSTOMER: "/customer",
    SEARCH_CUSTOMER: "/customer",
    CREATE_CUSTOMER: "/customer",
    
    GET_ITEM: "/item",
    GET_ITEM_LIST: "/item/list",
    DELETE_ITEM: "/item",
    UPDATE_ITEM: "/item",
    SEARCH_ITEM: "/item/search",
    CREATE_ITEM: "/item",
    GET_ITEM_CATEGORY: "/item/category",
    
    GET_ORDER_LIST: "/order/list",
    CREATE_ORDER:"/order"
}

export { API_BASE_URL, API_ENDPOINTS };