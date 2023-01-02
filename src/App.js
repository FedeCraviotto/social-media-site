import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Layout from './components/Layout/Layout';
import { createBrowserRouter,
  RouterProvider,
  Navigate
   } from 'react-router-dom';

function App() {

  const thereIsALoggedUser = true;

  function OnlyLoggedUserRoute({children}){
    if(!thereIsALoggedUser){
      return <Navigate to='/login'/>
    }
    return children;
  };

  const customRouterProvider = createBrowserRouter([ 
  {
    path:'/',
    element: (
    <OnlyLoggedUserRoute>
      <Layout/>
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
  {
    path:'/login',
    element:<Login/>,
  },
  {
    path:'/register',
    element:<Register/>,
  },
])
  return (
    <>
      <RouterProvider router={customRouterProvider}/>
    </>
  );
}

export default App;
