import React from 'react';
import {  createBrowserRouter ,RouterProvider} from 'react-router-dom';
import GeneralNews from "./components/GeneralNews";
import Navbar from "./components/Navbar";
import Technology from './components/Technology';
import Entertainment from './components/Entertainment';
import Health from './components/Health';
import Sports from './components/Sports';
import Science from './components/Science';
import Business from './components/Business';



 
function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <><Navbar/><div className="mt-16 p-4">
      <GeneralNews  category={"general"} />
    </div></>
    },
    {
      path: '/Technology',
      element :<><Navbar/><div className="mt-16 p-4">
      <Technology category={"Technology"}/>
    </div></>
    },
    {
      path: '/Entertainment',
      element :<><Navbar/><div className="mt-16 p-4">
      <Entertainment category={"entertainment"}/>
    </div></>
    },
    {
      path: '/Health',
      element :<><Navbar/><div className="mt-16 p-4">
      <Health category={"health"}/>
    </div></>
    },
    {
      path: '/Sports',
      element :<><Navbar/><div className="mt-16 p-4">
      <Sports category={"sports"}/>
    </div></>
    },
    {
      path: '/Science',
      element :<><Navbar/><div className="mt-16 p-4">
      <Science category={"science"}/>
    </div></>
    },
    {
      path: '/Business',
      element :<><Navbar/><div className="mt-16 p-4">
      <Business category={"business"} />
    </div></>
    },

  ])

  return (
    <div>
    <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
