import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Uber kenny</title>
        <link rel="icon" href= "/PixPin_2024-04-24_09-09-57.png" /> 
    
      </Head>

      <main>
        <h1 className={styles.title}>
          Uber Kenny
        </h1>
        
        <p className={styles.description}>
        THE BEST WAY TO ORDER FOOD DURING ANYTIME
        </p>
        <img src="/PixPin_2024-04-24_09-09-57.png" alt="Vercel"  />
        <div className={styles.grid}>
          <a href="/LoginPage" className={styles.card}>
            <h3>Login  &rarr;</h3>
            <p className={styles.card1}>Login with your account</p>
          </a>

          <a href="/SignUpPage" className={styles.card}>
            <h3>Sign up &rarr;</h3>
            <p className={styles.card1}>Sign up a new account</p>
          </a>
          

          <a
            href="/KennyPage"
            className={styles.card}
          >
            <h3>Kenny page &rarr;</h3>
            <p className={styles.card1}>Login page for Kenny</p>
          </a>
        
         
        </div>
      </main>

      <footer>
       
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
