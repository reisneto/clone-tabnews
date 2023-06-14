function Home() {
    return <div style={styles.container}>
            <div style={styles.phraseContainer}>
                <p style={styles.phrase}>Vamos conhecer o Mundo 🌎</p>
                <p style={styles.phrase}>juntos!? 👩🏻‍❤️‍👨🏻</p>
            </div>
         </div>
}

const styles = {
    container: {
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(132,94,194)",
        background: "linear-gradient(90deg, rgba(132,94,194,1) 0%, rgba(255,111,145,1) 34%, rgba(249,248,113,1) 100%)",
        
        background: "#FBD3E9",  /* fallback for old browsers */
        background: "-webkit-linear-gradient(to right, #BB377D, #FBD3E9)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to right, #BB377D, #FBD3E9)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    },
    phraseContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
    },
    phrase: {
        fontFamily: 'brush script mt',
        fontSize: "84px",
        color: "white",
        margin: "0",
    }
}

export default Home;