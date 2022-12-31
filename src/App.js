import Login from './views/login/login';
import Register from './views/register/register';
import Home from './views/home/home';
import { createBrowserRouter,
  RouterProvider,
  Route,
   } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
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
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
