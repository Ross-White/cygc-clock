import styles from "./page.module.css";
import Timer from "./components/timer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Timer/>
    </main>
  );
}
