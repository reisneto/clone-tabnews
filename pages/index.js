import styles from "./index.module.css"

function Home() {
    return <div className={styles.container}>
            <div className={styles.phraseContainer}>
                <p className={styles.phrase}>Vamos conhecer o Mundo 🌎</p>
                <p className={styles.phrase}>juntos!? 👩🏻‍❤️‍👨🏻</p>
            </div>
         </div>
}


export default Home;