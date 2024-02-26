import Login from './components/Login';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import UserInfo from './components/UserInfo';
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/userInfo",
      element: <UserInfo />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    }
  ])
  return (
    <RouterProvider router={appRouter}>
      <Login />
    </RouterProvider>
  );
}

export default App;
