import Link from 'next/link'
import styles from '../styles/index.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
	<>
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
	</Head>
    <div className={styles.startScreen}>
		<Link className={styles.startScreen} href="/Instructions">
			<img src="/Images/Static/arrow-right.png" alt="" className={styles.Nextimg} />
		</Link>
	</div>
	</>
  )
}
