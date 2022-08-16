import { createStore } from "vuex";

const store = createStore({
    state: {
        debugGB: "GlobalStoreDebug",
        toKitchen:{
            table_id:0,
            menu_id:0,
            equity: 0,
            status: "Ordered"
        },
        connection: null,

    },
    mutations:{

    }
})

export default store;