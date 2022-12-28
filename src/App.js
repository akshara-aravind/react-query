import { Routes, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ColorsPage } from './components/Colors.page'
import { RandomJokesPage } from './components/RandomJokes.page'
const queryClient = new QueryClient
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <nav>
          <Link to='/random-jokes'><h2>Random Jokes</h2></Link>
        </nav>
        <nav>
          <Link to='/colors'><h2>Colors</h2></Link>
        </nav>
        <Routes>
          <Route path='/random-jokes' element={<RandomJokesPage />}>
           </Route>
           <Route path='/colors' element={<ColorsPage/>}>
           </Route>
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App