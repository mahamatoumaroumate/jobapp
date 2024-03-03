import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import ProtectedRoute from './components/ProtectedRoute'
import {
  HomeLayout,
  AddJob,
  AllJobs,
  Register,
  Landing,
  Profile,
  Stats,
  Error,
} from './pages'
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <HomeLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Stats />,
      },
      {
        path: '/all-job',
        element: <AllJobs />,
      },
      {
        path: '/add-job',
        element: <AddJob />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/landing',
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
])
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
export default App
