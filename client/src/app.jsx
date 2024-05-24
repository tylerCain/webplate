import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import Homepage from './index.jsx'

const queryClient = new QueryClient({})

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  </QueryClientProvider>
)

export default App