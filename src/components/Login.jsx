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
                    
                    <form className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="email">Email address</label>
                            <input id="email" type="email" placeholder="Enter your email" />
                        </div>

                        <div className={styles.field}>
                            <div className={styles.labelRow}>
                                <label htmlFor="password">Password</label>
                                <a href="#" className={styles.forgot}>forgot password</a>
                            </div>
                            <input id="password" type="password" placeholder="Name" />
                        </div>

                        <label className={styles.checkbox}>
                            <input type="checkbox" />
                            Remember for 30 days
                        </label>

                        <button type="submit" className={styles.submit}>Login</button>
                    </form>
                </div>
            </section>

            <section className={styles.right}>
                <img src={blossom} alt="Blossom flower" className={styles.blossom} />
            </section>
        </div>
    )
}

export default Login;