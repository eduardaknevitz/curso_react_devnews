import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <h1 className={styles.title}>
      Hello <span>Dev!</span>
    </h1>
  );
}
