
import styles from "./layout.module.scss"
import Navigation from '../navigation/Navigation.jsx'
import { Outlet } from "react-router"

function Layout() {

  return (
    <div className={styles.container}>
      <aside>
        <Navigation />
      </aside>
      <main>
        <Outlet/>
      </main>
      <aside>
        aside
      </aside>
    </div>
  )
}

export default Layout
