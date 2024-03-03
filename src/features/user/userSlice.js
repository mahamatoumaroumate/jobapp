import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
  getUserFromLocalStorage,
  removeUser,
  setUserToLocalStorage,
} from '../../utils/localStorage'
import {
  clearStoreThunk,
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
} from './userThunk'
const initialState = {
  isLoading: false,
  isSideBarOpen: false,
  isProfile: false,
  user: getUserFromLocalStorage(),
}
export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk)
export const registerUser = createAsyncThunk('user/register', registerUserThunk)
export const loginUser = createAsyncThunk('user/login', loginUserThunk)
export const updateUser = createAsyncThunk('user/update', updateUserThunk)
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen
    },
    toggleIsProfile: (state) => {
      state.isProfile = !state.isProfile
    },
    logoutUser: (state, { payload }) => {
      state.user = null
      toast.success(payload)
      removeUser()
      return state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload
        setUserToLocalStorage(payload)
        toast.success(`Welcome ${payload.user.name}`)
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload
        setUserToLocalStorage(payload)
        toast.success(`Welcome Back ${payload.user.name}`)
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload
        setUserToLocalStorage(payload)
        toast.success('User Updated!')
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  },
})
export const { toggleSideBar, toggleIsProfile, logoutUser } = userSlice.actions
export default userSlice.reducer
