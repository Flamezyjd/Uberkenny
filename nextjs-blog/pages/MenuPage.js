import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Uber kenny</title>
      
      </Head>
      <h1 className={styles.title}>
          Menu
        </h1>
      <main>
      <div className={styles.grid}>
          <a href="/OrderPageCoffee" className={styles.card}>
            <h3>Coffee  &rarr;</h3>
            <p className={styles.card1}>Order a coffee</p>
          </a>

          <a href="/OrderPageSnack" className={styles.card}>
            <h3>Snack&rarr;</h3>
            <p className={styles.card1}>Order a snack</p>
          </a>
          

          <a
            href="/OrderPageCombo"
            className={styles.card}
          >
            <h3>Combo&rarr;</h3>
            <p className={styles.card1}>Order coffee and snack together</p>
          </a>
        
         
        </div>
        </main>
        </div>
  )
}