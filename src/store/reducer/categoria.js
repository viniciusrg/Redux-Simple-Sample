const { createSlice } = require("@reduxjs/toolkit")

const initialState = [{
    nome: "Carros",
}]

const categoriaSlice = createSlice({
    name: 'categoria',
    initialState,
})

export default categoriaSlice.reducer;