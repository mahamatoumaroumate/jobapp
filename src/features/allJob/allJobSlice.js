import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { getAllJobsThunk, showStatsThunk } from './allJobThunk'

export const getAllJobs = createAsyncThunk('allJobs/getJobs', getAllJobsThunk)
export const showStats = createAsyncThunk('allJobs/showStats', showStatsThunk)
const initialFilterSate = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
}
const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFilterSate,
}
const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1
      state[name] = value
    },
    clearFilters: (state) => {
      return { ...state, ...initialFilterSate }
    },
    changePage: (state, { payload }) => {
      state.page = payload
    },
    clearAllJobsState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.jobs = payload.jobs
        state.numOfPages = payload.numOfPages
        state.totalJobs = payload.totalJobs
      })
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(showStats.pending, (state) => {
        state.isLoading = true
      })
      .addCase(showStats.fulfilled, (state, { payload }) => {
        state.isLoading = false

        state.stats = payload.defaultStats
        state.monthlyApplications = payload.monthlyApplications
      })
      .addCase(showStats.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  },
})
export const { clearFilters, handleChange, changePage, clearAllJobsState } =
  allJobsSlice.actions
export default allJobsSlice.reducer
