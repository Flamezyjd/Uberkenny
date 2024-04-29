import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Uber kenny</title>
        <a href="/MenuPage" className={styles.HomeButton}>
            <h3>Back  &rarr;</h3>
          </a>
      </Head>
      <h1 className={styles.title}>
          Number of Snacks
        </h1>
      <main>
        </main>
        </div>
  )
}