import styles from './Header.module.css'
import { MedievalSharp } from 'next/font/google';
import { Lobster } from 'next/font/google'

const medievalSharp = MedievalSharp({subsets: ["latin"], weight: "400"})
const lobster = Lobster({subsets: ["latin"], weight: "400"})

interface HeaderProps {
    pageTitle: string,
    subTitle: string
}

const Header = ({pageTitle, subTitle}:HeaderProps) => {
    return (
        <header className={styles.header}>
            <h1 className={`${styles.pageTitle} ${medievalSharp.className}`}>{pageTitle}</h1>
            <h3 className={`${styles.subTitle} ${lobster.className}`}>{subTitle}</h3>
        </header>
    )
}

export default Header