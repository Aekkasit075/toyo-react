"use client";
import {useState} from "react";
import styles from "./ac.module.css";

export default function Accordion({title, info} : {title : string, info : string})
{
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    
    return(
            <div className={styles.accordion}>
                <div className={styles.title} onClick={toggleAccordion}>
                    <div className={styles.titlecon}>
                        {title} 
                    </div>
                    
                    <div className={styles.arrowhead}>
                        <p>⌄</p>
                    </div>                    
                </div>
               
                { isOpen ?
                <div className={styles.info}>
                    {info}
                </div>
                : ""
                }
            </div>
    )
}