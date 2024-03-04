import { Form } from 'react-router-dom'
import { Wrapper } from '../assets/wrappers/SearchFormContainer'
import FormInput from '../components/FormInput'
import { useDispatch, useSelector } from 'react-redux'
import FormSelect from '../components/FormSelect'

import {
  clearValues,
  handleChange,
  createJob,
  editJob,
} from '../features/job/jobSlice'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const AddJob = () => {
  const dispatch = useDispatch()
  const {
    position,
    isLoading,
    company,
    jobLocation,
    jobTypeOptions,
    status,
    statusOptions,
    jobType,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)
  const { user } = useSelector((store) => store.user.user)
  const handelJobInput = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company || !jobLocation) {
      toast.error('please fill all the fields')
      return
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      )
      return
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }))
  }
  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }))
    }
  }, [])

  return (
    <Wrapper>
      <section className='section'>
        <h3>Add Job</h3>
        <Form className='form' onSubmit={handleSubmit} method='post'>
          <FormInput
            type='input'
            name='position'
            labelName='Position'
            handleChange={handelJobInput}
            value={position}
          />
          <FormInput
            type='input'
            name='company'
            labelName='Company'
            handleChange={handelJobInput}
            value={company}
          />
          <FormInput
            type='input'
            name='jobLocation'
            labelName='JobLocation'
            value={jobLocation}
            handleChange={handelJobInput}
          />
          <FormSelect
            value={status}
            list={statusOptions}
            labelName='Status'
            name='status'
            handleChange={handelJobInput}
          />
          <FormSelect
            value={jobType}
            list={jobTypeOptions}
            name='jobType'
            labelName='JobType'
            handleChange={handelJobInput}
          />
          <div className='btn-container'>
            <button
              className='btn'
              type='button'
              onClick={() => {
                dispatch(clearValues()),
                  dispatch(
                    handleChange({ name: 'jobLocation', value: user.location })
                  )
              }}
            >
              Clear
            </button>
            <button
              className='btn btn-submit'
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? 'Submit...' : 'Submit'}
            </button>
          </div>
        </Form>
      </section>
    </Wrapper>
  )
}
export default AddJob
