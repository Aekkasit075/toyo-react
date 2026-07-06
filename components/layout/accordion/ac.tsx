"use client";

import {useState} from "react";
import styles from "./ac.module.css";

// export const AccordingContext = React.createContext<{
//     activeContent: string | null;
//     handleTrigger: (id: string | null) => void;
// } | null > (null);

// export const AccordingItemContext = React.createContext<{
//     id: string | null
// } | null > (null);

export default function accordion({title, info} : {title : string, info : string})
{
    // const [activeContent, setActiveContent] = useState<string | null >(null);
    // const handleTrigger = (id: string | null) => {
    //     let activeId: string | null = id;
    //     if(activeId === activeContent) activeId = null
    //     setActiveContent(activeId);
    // }
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    

    return(
        <div className={styles.accordion}>
            <div className={styles.title} onClick={toggleAccordion}>
               {title}
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