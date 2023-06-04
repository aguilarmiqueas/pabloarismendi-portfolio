import styles from "./media.module.scss"
// import Image from "next/image"
export const Media = (props) => {
    return (
        <div className={styles.media}>
            <img src={props.src} alt={props.alt} />
            {props.quote && (
            <div className={styles.quote}>
                {props.quote}
            </div>
            )}

        </div>
    )
}