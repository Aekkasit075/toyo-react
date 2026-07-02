import styles from './card.module.css'

export default function Card({ imgsrc, text }: { imgsrc: string, text: string }) 
{
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.cardpic}>
                    <img src={imgsrc}/>
                </div>
                <div className={styles.cardtext}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}