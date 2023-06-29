import styles from "./index.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.phraseContainer}>
        <p className={styles.phrase}>Vamos conhecer o Mundo 🌎</p>
        <p className={styles.phrase}>juntos!? 👩🏻‍❤️‍👨🏻</p>
      </div>
      <img
        src="https://media.tenor.com/zNf_BOcjn78AAAAC/pedro-pascal-nicolas-cage.gif"
        alt="nicolas's cage meme"
      />
    </div>
  );
}

export default Home;
