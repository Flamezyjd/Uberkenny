import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { GoogleLoginButton } from "react-social-login-buttons";


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
          Login
        </h1>
        <img src="/PixPin_2024-04-24_09-09-57.png" alt="Vercel"  />
        <GoogleLoginButton onClick={() => alert("Hello")} />
        <input type="text" id="LoginEmail" size="25" maxlength="50" className={styles.card} placeholder="School email"></input>
        <input type="password" id="LoginPassword" size="25" maxlength="50" className={styles.card} placeholder="Password"></input>
        <input type="button" onclick="check(this)" value="Login" className={styles.card}></input>
        
        <a href="/MenuPage" className={styles.HomeButton}>
            <h3>Test  &rarr;</h3>
          </a>

      <main>
        </main>
        </div>
        
  )
  

}