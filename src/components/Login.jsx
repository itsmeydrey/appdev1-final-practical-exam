import styles from "./Login.module.css";
import blossom from "../assets/blossom-flower.svg";
import googleLogo from "../assets/icons-google-logo.svg";
import appleLogo from "../assets/icons-apple-logo.svg";

function Login() {
    return (
        <div className={styles.page}>
            <section className={styles.left}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Welcome back!</h1>
                    <p className={styles.subtitle}>Enter your Credentials to access your account</p>
                </div>
            </section>

            <section className={styles.right}>
                <img src={blossom} alt="Blossom flower" className={styles.blossom} />
            </section>
        </div>
    )
}

export default Login;