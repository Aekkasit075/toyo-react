import styles from './card.module.css'
import Link from 'next/link';

export default function Card({ imgsrc, text, source }: { imgsrc: string, text: string, source: string }) 
{
    return (
        <div className={styles.cardcontainer}>
            <Link href={source}>
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
            </Link>
        </div>
    )
}