import { createSlice } from "@reduxjs/toolkit";


const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isExpanded: false,
        isMobile: false,
    },
    reducers: {
        toggleSidebar: (state) => {
            state.isExpanded = !state.isExpanded;
        },
        setMobile: (state, action) => {
            state.isMobile = action.payload;
        },
    }
})

export const { toggleSidebar, setMobile } = sidebarSlice.actions;
export default sidebarSlice.reducer;