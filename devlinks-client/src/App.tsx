import { RouterProvider } from "react-router-dom";
import './App.css';
import Router from './routes/router';

function App() {
  return (
    <div className='bg-[#fafafa] min-h-screen min-w-screen'>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App