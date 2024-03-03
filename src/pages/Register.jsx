import { Form, Link, useNavigate } from 'react-router-dom'
import { Wrapper } from '../assets/wrappers/Register'
import img from '../assets/favicon.ico'
import { FormInput } from '../components'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, registerUser } from '../features/user/userSlice'
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}
const Register = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (
      !values.email ||
      !values.password ||
      (!values.isMember && !values.name)
    ) {
      toast.error('please fill all the field')
      return
    }
    if (values.isMember) {
      dispatch(loginUser({ email: values.email, password: values.password }))
      return
    }
    dispatch(
      registerUser({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
  }
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [user])
  return (
    <Wrapper>
      <Form className='form' onSubmit={onSubmit}>
        <div className='logo-container'>
          <img src={img} alt='logo' />
          <h1>Jobster</h1>
        </div>
        <h2>Login</h2>
        {!values.isMember && (
          <FormInput
            type='type'
            labelName='Name'
            name='name'
            handleChange={handleChange}
          />
        )}
        <FormInput
          type='email'
          labelName='Email'
          name='email'
          handleChange={handleChange}
        />
        <FormInput
          type='password'
          labelName='Password'
          name='password'
          handleChange={handleChange}
        />
        <button className='btn btn-submit' disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Submit'}
        </button>
        <button
          className='btn btn-demo'
          onClick={() =>
            dispatch(
              loginUser({ email: 'testUser@test.com', password: 'secret' })
            )
          }
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Demo App'}
        </button>
        {values.isMember ? (
          <p>
            Not a member ?{' '}
            <button
              type='button'
              className='btn-toggle'
              onClick={() => setValues({ ...values, isMember: false })}
            >
              Register
            </button>{' '}
          </p>
        ) : (
          <p>
            Already a member ?{' '}
            <button
              type='button'
              className='btn-toggle'
              onClick={() => setValues({ ...values, isMember: true })}
            >
              Login
            </button>{' '}
          </p>
        )}
      </Form>
    </Wrapper>
  )
}
export default Register
