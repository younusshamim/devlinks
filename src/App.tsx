import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import './App.css';
import { ProfileProvider } from "./context/ProfileContext";
import Router from './routes/router';

function App() {
  return (
    <div className='bg-[#fafafa] overflow-hidden'>
      <ProfileProvider>
        <RouterProvider router={Router} />
        <Toaster />
      </ProfileProvider>
    </div>
  )
}

export default App