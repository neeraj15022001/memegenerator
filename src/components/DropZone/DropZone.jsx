import React from "react";
import Image from 'react-bootstrap/Image'

export default function DropZone() {
    return (
        <div className={"w-100 h-100 p-5 d-flex align-items-center justify-content-center bg-light rounded-3"}>
            <Image className={"shadow"} fluid rounded
                   src={"https://ichef.bbci.co.uk/news/1024/branded_news/7CC2/production/_118283913_29xp-meme-mobilemasterat3x-v3.jpg"}
                   alt={"meme"}/>
        </div>
    )
}