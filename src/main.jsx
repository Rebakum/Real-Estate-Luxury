import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import About from './About/About';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Components/authProvider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import 'animate.css';
import LuxuryEstateDetails from './Components/LuxuryEstateDetails/LuxuryEstateDetails';
import Gallery from './Components/Gallery/Gallery';
// ..
AOS.init();

const url = " https://rebeka08.github.io/real-state/fakeData.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => fetch(url),
      },
      {
        path: '/data/:id',
        element: <LuxuryEstateDetails></LuxuryEstateDetails>,
        loader: async () => fetch(url),

      },

      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/userProfile',
        element: <userProfile></userProfile>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
        loader: async () => fetch(url),
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
