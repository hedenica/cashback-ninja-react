import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Home } from 'pages/Home'
import { Form } from 'pages/Form'
import { Header } from 'shared/Header'
import { Footer } from 'shared/Footer'

import './global.css'

const queryClient = new QueryClient()

function App () {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className='content-wrapper'>
          <Header />
          <Switch>
            <Route component={Home} path='/' exact />
            <Route component={Form} path='/register' />
            <Redirect from='*' to='/' />
          </Switch>
        </div>
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Router>
  )
}

export default App
