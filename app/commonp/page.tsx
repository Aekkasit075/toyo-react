import styles from './page.module.css'
import Script from 'next/script';
import Accordion from '@/components/layout/accordion/ac';
import Link from 'next/link'

export default function Commonp()
{
    return(
        <div className={styles.body}>
            <Link rel="stylesheet" href="https://code.jquery.com/ui/1.13.3/themes/smoothness/jquery-ui.css"/>
            <Script src="https://code.jquery.com/jquery-3.7.1.js" strategy="beforeInteractive"/>
            <Script src="https://code.jquery.com/ui/1.13.3/jquery-ui.js" strategy="lazyOnload"/>
            <div className={styles.title}>
                <h1>ปัญหาที่พบบ่อย</h1>
            </div>
            <div className={styles.content}>
                <Accordion title = '1.การเรียน/สอบ' info = 'กดเข้าปุ่มนู้นปุ่มนี้เดี๋ยวก็ได้เอง'/>
                <Accordion title = '2.เปลี่ยนรหัสผ่าน' info = 'วิธีเปลี่ยนรหัสผ่านทำได้ง่ายๆ โดยเข้าไปที่การตั้งค่าความปลอดภัยของแต่ละบริการ สำหรับบัญชี Google (เช่น Gmail) สามารถทำได้โดยไปที่เมนู ความปลอดภัย แล้วเลือก รหัสผ่าน หากใช้ Facebook สามารถไปที่ ศูนย์บัญชี แล้วเลือก รหัสผ่านและการรักษาความปลอดภัย'/>
                <Accordion title = '3.วิธีแจ้งปัญหาการใข้งาน' info = 'เข้าไปที่หน้าตั่งค่าแล้วกดปุ่มร้องเรียน'/>
            </div>
        </div>
    )
}