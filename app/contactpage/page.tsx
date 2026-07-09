'use client';
import { useEffect, useRef } from 'react';
import styles from './page.module.css';
import Script from "next/script";
import toyoImg from '@/components/image/toyo.png';
import mapImg from '@/components/image/map.png';
import emailImg from '@/components/image/email.png';
import phoneImg from '@/components/image/phone.png';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'gmp-map': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          center?: string;
          zoom?: string | number;
          'map-id'?: string;
          ref?: React.RefObject<any>;
        };
      }
    }
  }
}

export default function Contact() {
    const mapRef = useRef<any>(null);

    useEffect(() => {
        async function initMap() {
            const mapElement = mapRef.current;
            if (!mapElement) return;

            try {
                if (typeof window !== 'undefined' && !(window as any).google) {
                    await new Promise((resolve) => {
                        const checkGoogle = setInterval(() => {
                            if ((window as any).google?.maps?.importLibrary) {
                                clearInterval(checkGoogle);
                                resolve(true);
                            }
                        }, 100);
                    });
                }

                const { AdvancedMarkerElement } = await (window as any).google.maps.importLibrary('marker');

                const priceTag = document.createElement('div');
                priceTag.className = 'price-tag';
                priceTag.textContent = '$2.5M';

                const marker = new AdvancedMarkerElement({
                    position: { lat: 37.42, lng: -122.1 },
                });
                
                marker.append(priceTag);
                mapElement.append(marker);
            } catch (error) {
                console.error("เกิดข้อผิดพลาดในการโหลดหมุด Google Maps:", error);
            }
        }

        initMap();
    }, []);

    return (
        <div className={styles.container}>
            <Script 
                id="google-maps-loader" 
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=\`https://maps.\${c}apis.com/maps/api/js?\`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
                        key: "AIzaSyA6myHzS10YXdcazAFalmXvDkrYCp5cLc8"
                    });`
                }}
            />

            <div className={styles.title}>
                <p>ติดต่อเรา</p>
            </div>
            <div className={styles.contentcontainer}>
                <div className={styles.picture}>
                    <img src={toyoImg.src} alt="Toyo"/>
                </div>
                <div className={styles.information}>
                    <div className={styles.location}>
                        <img src={mapImg.src} alt="Map Icon" />
                        <div className={styles.locationcon}>
                            <p>ที่ตั้ง</p>
                            <p>95 หมู่ 3, สวนอุตสาหกรรมโรจนะ 2, ตำบล บ้านห้าง, อำเภอ อุทัย, จังหวัด พระนครศรีอยุธยา 10210 ประเทศไทย</p>
                        </div>
                    </div>
                    <div className={styles.email}>
                        <img src={emailImg.src} alt="Email Icon" />
                        <div className={styles.emailcon}>
                            <p>อีเมล</p>
                            <p>info@toyoseikon.co.th</p>
                        </div>
                    </div>
                    <div className={styles.phonenum}>
                        <img src={phoneImg.src} alt="Phone Icon" />
                        <div className={styles.phonenumcon}>
                            <p>โทรศัพท์</p>
                            <p>+66-35-746-655</p>
                        </div>                        
                    </div>                                        
                </div>
            </div>
            <div className={styles.googlemap}>
                <gmp-map
                ref={mapRef}
                center="37.42,-122.1"
                zoom="14"
                map-id="4504f8b37365c3d0">
                </gmp-map>
            </div>
            
        </div>
    );
}