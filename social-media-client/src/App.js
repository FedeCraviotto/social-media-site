import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Layout from './components/Layout/Layout';
import { createBrowserRouter,
  RouterProvider,
  Navigate
   } from 'react-router-dom';
import { AuthContext } from './context/authContext';
import { useContext } from 'react';


function App() {

  const {currentUser} = useContext(AuthContext);

  function OnlyLoggedUserRoute({children}){
    if(!currentUser){
      return <Navigate to='/login'/>
    }
    return children;
  };

  const customRouterProvider = createBrowserRouter([ 
    {
      path:'/login',
      element:<Login/>,
    },
    {
      path:'/register',
      element:<Register/>,
    },
  {
    path:'/',
    element: (
    <OnlyLoggedUserRoute>
      <Layout />
    </OnlyLoggedUserRoute>
    ),
    children:[ // Los childen van a responder al Outlet
      {
        path:'/',
        element: <Home />,
      },
      {
        path:'/profile/:id',
        element: <Profile />,
      }
    ]
  },
  
])
  return (
    <>
      <RouterProvider router={customRouterProvider}/>
    </>
  );
}

export default App;