import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Tech: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Tech that I use
        </h1>


        <div className={styles.grid}>
          <a href="https://www.typescriptlang.org/" className={styles.card} target="_blank">
            <h2>TypeScript &rarr;</h2>
            <p>Strongly typed programming language which builds on JavaScript.</p>
          </a>

          <a href="https://reactjs.org/" className={styles.card} target="_blank">
            <h2>React &rarr;</h2>
            <p>A JavaScript library for painless building interactive user interfaces reacting your data. </p>
          </a>

          <a
            href="https://xstate.js.org/"
            className={styles.card}
            target="_blank"
          >
            <h2>XState &rarr;</h2>
            <p>JavaScript and TypeScript finite state machines for the modern web.</p>
          </a>

          <a
            href="https://tailwindcss.com/"
            className={styles.card}
            target="_blank"
          >
            <h2>TailwindCSS &rarr;</h2>
            <p>
              A utility-first CSS framework . Rapidly build modern websites without ever leaving your HTML.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Tech
