import styles from "./page.module.css";
import Timer from "./components/timer";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>The Clock.</h1>
      <Timer/>
      <h2>Since an accident</h2>
    </main>
  );
}
