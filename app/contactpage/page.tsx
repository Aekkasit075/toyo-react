'use client';
import styles from './page.module.css'
import toyoImg from '@/components/image/toyo.png'
import mapImg from '@/components/image/map.png'
import emailImg from '@/components/image/email.png'
import phoneImg from '@/components/image/phone.png'

export default function Contact()
{
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <p>ติดต่อเรา</p>
            </div>
            <div className={styles.contentcontainer}>
                <div className={styles.picture}>
                    <img src={toyoImg.src}/>
                </div>
                <div className={styles.information}>
                    <div className={styles.location}>
                        <img src={mapImg.src} />
                        <div className={styles.locationcon}>
                            <p>ที่ตั้ง</p>
                            <p>95 หมู่ 3, สวนอุตสาหกรรมโรจนะ 2, ตำบล บ้านห้าง, อำเภอ อุทัย, จังหวัด พระนครศรีอยุธยา 10210 ประเทศไทย</p>
                        </div>
                    </div>
                    <div className={styles.email}>
                        <img src={emailImg.src} />
                        <div className={styles.emailcon}>
                            <p>อีเมล</p>
                            <p>info@toyoseikon.co.th</p>
                        </div>
                    </div>
                    <div className={styles.phonenum}>
                        <img src={phoneImg.src} />
                        <div className={styles.phonenumcon}>
                            <p>โทรศัพท์</p>
                            <p>+66-35-746-655</p>
                        </div>                        
                    </div>

                </div>
            </div>
        </div>
    )
}