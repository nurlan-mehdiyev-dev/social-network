
import Layout from './components/layout/Layout'
import "./App.scss"
import { Route, Routes } from 'react-router'
import MainPage from './pages/mainPage/MainPage'
import Messages from './pages/messages/Messages'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path='/messages' element={<Messages />} />
        </Route>
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>

    </>
  )
}

export default App
