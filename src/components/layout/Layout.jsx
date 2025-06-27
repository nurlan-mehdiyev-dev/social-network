
import styles from "./layout.module.scss"
import Navigation from '../navigation/Navigation.jsx'
import { Outlet } from "react-router"

function Layout() {

  return (
    <div>
      <header className={styles.header}>
        header
      </header>
      <div className={styles.container}>
        <aside>
          <Navigation />
        </aside>
       
        <main>
          <Outlet />
        </main>
       
      </div>
    </div>

  )
}

export default Layout
