import { Form } from 'react-router-dom'
import { Wrapper } from '../assets/wrappers/SearchFormContainer'
import { FormInput } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { updateUser } from '../features/user/userSlice'
import { toast } from 'react-toastify'
const Profile = () => {
  const { user, isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const Values = {
    email: user?.user?.email || '',
    name: user?.user?.name || '',
    lastName: user?.user?.lastName || '',
    location: user?.user?.location || '',
  }
  const [newValues, setNewValues] = useState(Values)
  const handleChange = (e) => {
    setNewValues({ ...newValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !newValues.email ||
      !newValues.lastName ||
      !newValues.name ||
      !newValues.location
    ) {
      toast.error('please fill all the fields')
      return
    }
    dispatch(updateUser(newValues))
  }
  return (
    <Wrapper>
      <section className='section'>
        <h1>Profile</h1>
        <Form className='form' onSubmit={handleSubmit} method='post'>
          <FormInput
            type='input'
            name='name'
            value={newValues.name}
            labelName='Name'
            handleChange={handleChange}
          />
          <FormInput
            type='input'
            name='lastName'
            value={newValues.lastName}
            labelName='Last Name'
            handleChange={handleChange}
          />
          <FormInput
            type='email'
            name='email'
            value={newValues.email}
            labelName='Email'
            handleChange={handleChange}
          />
          <FormInput
            type='input'
            name='location'
            value={newValues.location}
            labelName='Location'
            handleChange={handleChange}
          />
          <button className='btn-save' disabled={isLoading} type='submit'>
            {isLoading ? 'Save Changes...' : 'Save Changes'}
          </button>
        </Form>
      </section>
    </Wrapper>
  )
}
export default Profile
