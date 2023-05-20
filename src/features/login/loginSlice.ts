import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import { submitLoginRequest, Crendentials } from "./loginAPI"


export interface LoginState {
  isLoggedIn: boolean
}

const initialState: LoginState = {
  isLoggedIn: false
}

export const submitLoginAsync = createAsyncThunk(
  "login/submitLogin",
  async (crendentials: Crendentials) => {
    const response = await submitLoginRequest(crendentials)
    return response.data
  },
)

export const loginSlice = createSlice({
  name: "login",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    submitLogin: (state:LoginState, action: PayloadAction<number>) => {
      state.isLoggedIn = action.payload
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(submitLoginAsync.pending, (state: any) => {
        state.status = "loading"
      })
      .addCase(submitLoginAsync.fulfilled, (state: any, action: any) => {
        state.status = "success"
        state.isLoggedIn = true
      })
      .addCase(submitLoginAsync.rejected, (state: any) => {
        state.status = "failed"
        state.isLoggedIn = false
      })
  },
})
export const { submitLogin } = loginSlice.actions

export const selectIsLoggedIn = (state: RootState) => state.login.isLoggedIn
export const selectStatus = (state: RootState) => state.login.status
export default loginSlice.reducer 
