import categoriaSlice from './reducer/categoria'

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        categoria: categoriaSlice
    }
})

export default store;