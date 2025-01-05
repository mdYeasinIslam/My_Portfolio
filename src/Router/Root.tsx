import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Main } from '../Layout/Main'
import { Home } from '../Pages/Home/Home'
import { About } from '../Pages/About/About'
import Projects from '../Pages/Pojects/Projects'

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
                {
                    path: 'projects',
                    element:<Projects/>
                }
                

            ]
        }
    ])
  return (
   <RouterProvider router={routes}/>
  )
}
