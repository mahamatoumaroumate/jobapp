import { Form } from 'react-router-dom'
import { Wrapper } from '../assets/wrappers/SearchFormContainer'
import FormInput from './FormInput'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo, useState } from 'react'
import FormSelect from './FormSelect'
import {
  clearFilters,
  getAllJobs,
  handleChange,
} from '../features/allJob/allJobSlice'

const SearchFormContainer = () => {
  const [localSearch, setLocalSearch] = useState()
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job)
  const {
    isLoading,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    search,
    page,
  } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

  const handleInput = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  }
  const debounce = () => {
    let timeOutID
    return (e) => {
      setLocalSearch(e.target.value)
      clearTimeout(timeOutID)
      timeOutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }))
      }, 1000)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLocalSearch('')
    dispatch(clearFilters())
  }

  const optimizedDebounce = useMemo(() => debounce(), [])
  return (
    <Wrapper>
      <section className='section'>
        <h3>Search Form</h3>
        <Form className='form' onSubmit={handleSubmit}>
          <FormInput
            type='search'
            value={localSearch}
            name='search'
            labelName='Search'
            handleChange={optimizedDebounce}
          />
          <FormSelect
            value={searchStatus}
            list={['all', ...statusOptions]}
            labelName='Status'
            name='searchStatus'
            handleChange={handleInput}
          />
          <FormSelect
            value={searchType}
            list={['all', ...jobTypeOptions]}
            name='searchType'
            labelName='Type'
            handleChange={handleInput}
          />
          <FormSelect
            list={['latest', 'oldest', 'a-z', 'z-a']}
            labelName='Sort'
            name='sort'
            value={sort}
            handleChange={handleInput}
          />
          <button className='clear-btn'>Clear Filters</button>
        </Form>
      </section>
    </Wrapper>
  )
}
export default SearchFormContainer
