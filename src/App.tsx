import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import './App.css';
import { ProfileProvider } from "./context/ProfileContext";
import Router from './routes/router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
})

function App() {
  return (
    <div className='bg-[#fafafa] overflow-hidden'>
      <QueryClientProvider client={queryClient}>
        <ProfileProvider>
          <RouterProvider router={Router} />
        </ProfileProvider>
        <Toaster />
      </QueryClientProvider>
    </div>
  )
}

export default App