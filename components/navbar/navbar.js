import styles from "./navbar.module.scss"
import Link from "next/link"
export const Navbar = () => {
    return (<nav className={styles.navbar}>
        <Link href="/">SIMULTÁNEO</Link>
        <ul>
            <Link href="/bio">Bio</Link>
            <Link href="/previous-works">Previous Works</Link>
        </ul>
    </nav>)
}