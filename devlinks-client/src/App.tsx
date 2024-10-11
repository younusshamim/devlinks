import { RouterProvider } from "react-router-dom";
import './App.css';
import Router from './routes/router';

function App() {
  return (
    <div className='bg-[#fafafa] overflow-hidden'>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App