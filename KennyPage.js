import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Uber kenny</title>
        <a href="/" className={styles.HomeButton}>
            <h3>Home  &rarr;</h3>
          </a>
      </Head>
      <h1 className={styles.title}>
          Kenny Login
        </h1>
      <main>
        </main>
        </div>
  )
}