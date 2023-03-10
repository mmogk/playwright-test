import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Example #1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to my home page</h1>
        <div className={styles.grid}>
          <div className={styles.grid_container} style={{display:"grid"}}>
            <div className={styles.grid__item}>
              <h2>what does CRUD stand for?</h2>
            </div>
            <ul>
                <li>Create</li>
                <li>Read</li>
                <li>Update</li>
                <li>Delete</li>
            </ul>
            </div>
          </div>
        <Link href="/about">About Page</Link>
        <Link href="/grades">Grades Page</Link>

       <button>
        view all this info
       </button>
       
       <footer>
          <p>"in class example #1"</p>
      </footer>
       
      </main>
    </div>
  )
}
