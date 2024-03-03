import { customFetch } from '../../utils/axios'
import { logoutUser } from './userSlice'
import { clearValues } from '../job/jobSlice'
import { clearAllJobsState } from '../allJob/allJobSlice'
export const registerUserThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post('/auth/register', user)

    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.response?.data?.msg)
  }
}
export const loginUserThunk = async (user, thunkAPI) => {
  try {
    const reps = await customFetch.post('/auth/login', user)

    return reps.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.response?.data?.msg)
  }
}
export const updateUserThunk = async (user, thunkAPI) => {
  try {
    const reps = await customFetch.patch('/auth/updateUser', user)
    return reps.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.response?.data?.msg)
  }
}
export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(message))
    thunkAPI.dispatch(clearAllJobsState())
    thunkAPI.dispatch(clearValues())
    return Promise.resolve()
  } catch (error) {
    return Promise.reject()
  }
}
