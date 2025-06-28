
import Layout from './components/layout/Layout'
import "./App.scss"
import { Route, Routes } from 'react-router'
import MainPage from './pages/mainPage/MainPage'
import Messages from './pages/messages/Messages'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import Profile from './pages/profile/Profile'
import ProfileLayout from './components/profile-layout/ProfileLayout'
import Notifications from './components/notifications/Notifications'


function App() {

  return (
    <>


      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<MainPage />} />

          <Route path="profile" element={<ProfileLayout />} >
            <Route index element={<Profile />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="messages" element={<Messages />} />

          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </>
  )
}

export default App
