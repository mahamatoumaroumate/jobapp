import { customFetch } from '../../utils/axios'
import { logoutUser } from '../user/userSlice'
import { getAllJobs } from '../allJob/allJobSlice'
import { clearValues } from './jobSlice'
export const createJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post('/jobs', job)
    thunkAPI.dispatch(clearValues())
    return resp.data
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser())
      return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
    }
    return thunkAPI.rejectWithValue(error?.response?.data?.msg)
  }
}
export const deleteJobThunk = async (jobId, thunkAPI) => {
  try {
    const resp = await customFetch.delete(`/jobs/${jobId}`)
    thunkAPI.dispatch(getAllJobs())
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
export const editJobThunk = async ({ job, jobId }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(`/jobs/${jobId}`, job)
    thunkAPI.dispatch(clearValues())
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
