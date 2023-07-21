"use client"
import { InstagramEmbed } from "react-social-media-embed"

export default function Page({ params }: {params: {image: string}}) {
    const imageUrlMap: {[image: string]: string} = {
        "cube": "https://www.instagram.com/p/B4KoQ-2JC7O/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
        "miniature": "https://www.instagram.com/p/B4Kq6lOJvVC/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
        "mountains": "https://www.instagram.com/p/B4Kp1PiJDfk/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
        "pancakes": "https://www.instagram.com/p/B5NlNl1h1sV/?utm_source=ig_embed&amp;utm_campaign=loading",
        "weightless": "https://www.instagram.com/p/B4KsHwwpBTy/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
    }

    if(!(params.image in imageUrlMap)){
        return(
            <h1>{"404 Image not found :("}</h1>
        )
    }

    return(
        <div className="px-5 flex-col w-full mx-auto my-32 max-w-4xl">
            <InstagramEmbed url={imageUrlMap[params.image]} />
        </div>
    )
}