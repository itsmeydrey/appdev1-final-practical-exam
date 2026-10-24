import styles from "./SignUp.module.css";
import blossom from "../assets/blossom-flower.svg";

function SignUp() {
    return (
        <div className={styles.page}>
            <section className={styles.left}>
                {/* empty for now */}
            </section>

            <section className={styles.right}>
                <img src={blossom} alt="Blosso flower" className={styles.blossom} />
            </section>
        </div>
    )
}

export default SignUp;