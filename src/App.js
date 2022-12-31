import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Navbar from '../src/components/Navbar/Navbar'
import LeftBar from '../src/components/Leftbar/LeftBar'
import RightBar from '../src/components/Rightbar/RightBar'
import { createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
   } from 'react-router-dom';

function App() {

  const thereIsALoggedUser = false;

  function OnlyLoggedUserRoute({children}){
    if(!thereIsALoggedUser){
      return <Navigate to='/login'/>
    }
    return children;
  };

  function Layout(){
    return(
      <div>
        <Navbar />
        <div style={{display:'flex'}}>
          <LeftBar />
          <Outlet /> {/*Parte central dinamica. Seteado en children*/}
          <RightBar />
        </div>
      </div>
    )
  }
  const customRouterProvider = createBrowserRouter([ 
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
