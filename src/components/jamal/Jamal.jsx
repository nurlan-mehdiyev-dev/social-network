import styles from './styles.module.scss'

export default function Jamal() {
    return (
        <div className={styles.Jamal}>
            <header className={styles.title}>
                <h2>header</h2>
            </header>

            <main className={styles.image}>
                <img src="https://i.pinimg.com/564x/73/0d/f3/730df38c402f6dcde37bc793e5ba56f5.jpg" alt="цветок" />
            </main>

            <footer className={styles.footer}>footer</footer>
        </div>
    )

}