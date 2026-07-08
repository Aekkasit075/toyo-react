import Link from 'next/link';
import styles from './page.module.css'
import Card from '@/components/layout/tutorialcard/card'

export default function Home() {
  return (
    <div className={styles.border}>
      <div className={styles.ptitle}>
        <h1>วิธีการใช้งาน</h1>
      </div>
      <div className={styles.pcontent}>
          <Card imgsrc='https://images.pexels.com/photos/1110656/pexels-photo-1110656.jpeg' text='วิธีการสมัครสมาชิก' source='/'/>
          <Card imgsrc='https://images.pexels.com/photos/2080960/pexels-photo-2080960.jpeg' text='ลืมรหัสผ่าน' source='/'/>
          <Card imgsrc='https://images.pexels.com/photos/4826377/pexels-photo-4826377.jpeg' text='การเข้าสู่ห้องเรียนออนไลน์' source='/'/>
          <Card imgsrc='https://images.pexels.com/photos/7799688/pexels-photo-7799688.jpeg' text='การสอบและผมการสอบ' source='/'/>
          <Card imgsrc='https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg' text='เปลี่ยนรหัสผ่าน' source='/'/>
          <Card imgsrc='https://images.pexels.com/photos/7508276/pexels-photo-7508276.jpeg' text='กดออกจากระบบ' source='/'/>
          <Card imgsrc='https://images.pexels.com/photos/37684417/pexels-photo-37684417.jpeg' text='ช่วยด้วย' source='/'/>
      </div>
    </div>
  );
}