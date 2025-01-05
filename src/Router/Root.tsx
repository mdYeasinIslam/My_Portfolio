import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Main } from '../Layout/Main'
import { Home } from '../Pages/Home/Home'
import { About } from '../Pages/About/About'

export const Root = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element:<Home/>
                },
                {
                    path: '/about',
                    element:<About/>
                },
              
                

            ]
        }
    ])
  return (
   <RouterProvider router={routes}/>
  )
}
