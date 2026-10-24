import styles from "./SignUp.module.css";
import blossom from "../assets/blossom-flower.svg";

function SignUp() {
    return (
        <div className={styles.page}>
            <section className={styles.left}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Get Started Now</h1>
                    
                    <form className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" placeholder="Enter your name" />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="email">Email address</label>
                            <input id="email" type="email" placeholder="Enter your email" />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" placeholder="Name" />
                        </div>

                        <label className={styles.checkbox}>
                            <input type="checkbox" />
                            I agree to the <span className={styles.termsPolicy}>terms &amp; policy</span>
                        </label>

                        <button type="submit" className={styles.submit}>Signup</button>
                    </form>
                </div>
            </section>

            <section className={styles.right}>
                <img src={blossom} alt="Blossom flower" className={styles.blossom} />
            </section>
        </div>
    )
}

export default SignUp;