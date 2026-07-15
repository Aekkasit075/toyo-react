'use client';

import styles from './page.module.css';
import toyoImg from '@/components/image/toyo.png';
import mapImg from '@/components/image/map.png';
import emailImg from '@/components/image/email.png';
import phoneImg from '@/components/image/phone.png';

export default function Contact() {

    return (
        <div className={styles.container}>

            <div className={styles.title}>
                <p>ติดต่อเรา</p>
            </div>


            <div className={styles.contentcontainer}>


                {/* IMAGE */}
                <div className={styles.picture}>
                    <img 
                        src={toyoImg.src} 
                        alt="Toyo"
                    />
                </div>



                {/* INFORMATION */}
                <div className={styles.information}>


                    {/* LOCATION */}
                    <div className={styles.location}>

                        <img 
                            src={mapImg.src} 
                            alt="Map Icon" 
                        />

                        <div className={styles.locationcon}>

                            <p>ที่ตั้ง</p>

                            <p>
                                95 หมู่ 3, สวนอุตสาหกรรมโรจนะ 2,
                                ตำบล บ้านห้าง, อำเภอ อุทัย,
                                จังหวัด พระนครศรีอยุธยา 10210 ประเทศไทย
                            </p>

                        </div>

                    </div>




                    {/* EMAIL */}
                    <div className={styles.email}>

                        <img 
                            src={emailImg.src} 
                            alt="Email Icon" 
                        />


                        <div className={styles.emailcon}>

                            <p>อีเมล</p>

                            <p>
                                info@toyoseikon.co.th
                            </p>

                        </div>

                    </div>





                    {/* PHONE */}
                    <div className={styles.phonenum}>

                        <img 
                            src={phoneImg.src} 
                            alt="Phone Icon" 
                        />


                        <div className={styles.phonenumcon}>

                            <p>โทรศัพท์</p>

                            <p>
                                +66-35-746-655
                            </p>

                        </div>


                    </div>


                </div>


            </div>





            {/* GOOGLE MAP */}
            <div className={styles.googlemap}>

                <iframe
                    src="https://www.google.com/maps?q=Toyo+Seikan+Thailand+Ayutthaya&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                />

            </div>


        </div>
    );
}