import styles from  './page.module.css'
import Acard from '@/components/layout/annoucecard/card'

export default function AnnoucePage()
{
    return (
        <div className={styles.border}>
            <div className={styles.ptitle}>
                <h1>ข่าวประชาสัมพันธ์</h1>
            </div>
            <div className={styles.acontent}>
                <Acard 
                    imgsrc='https://images.pexels.com/photos/18435520/pexels-photo-18435520.jpeg'
                    title='DummyText'
                    date='10 เมษายน 2564'
                    text='Name what is this'
                    source='/announcedetail'
                />
                <Acard 
                    imgsrc='https://images.pexels.com/photos/16595082/pexels-photo-16595082.jpeg'
                    title='DummyText'
                    date='10 เมษายน 2564'
                    text='Name what is this'
                    source='/announcedetail'
                />
                <Acard 
                    imgsrc='https://images.pexels.com/photos/8190663/pexels-photo-8190663.jpeg'
                    title='DummyText'
                    date='10 เมษายน 2564'
                    text='Name what is this'
                    source='/announcedetail'
                />
                 <Acard 
                    imgsrc='https://images.pexels.com/photos/8911016/pexels-photo-8911016.jpeg'
                    title='DummyText'
                    date='10 เมษายน 2564'
                    text='Name what is this'
                    source='/'
                />
                 <Acard 
                    imgsrc='https://images.pexels.com/photos/28942316/pexels-photo-28942316.jpeg'
                    title='DummyText'
                    date='10 เมษายน 2564'
                    text='Name what is this'
                    source='/announcedetail'
                />
                <Acard 
                    imgsrc='https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg'
                    title='DummyText'
                    date='10 เมษายน 2564'
                    text='Name what is this'
                    source='/announcedetail'
                />
            </div>
        </div>
    )
}