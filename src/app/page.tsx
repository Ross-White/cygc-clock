import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>The Clock</h1>
      <h2>01:20:34</h2>
      <h2>Since an accident</h2>
    </main>
  );
}
