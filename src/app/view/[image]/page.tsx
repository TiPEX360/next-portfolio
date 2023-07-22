import ClientClosure from "./ClientClosure"

export function generateStaticParams() {
    return [
        {image: "cube"},
        {image: "miniature"},
        {image: "mountains"},
        {image: "pancakes"},
        {image: "weightless"}
    ]
}

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
        <ClientClosure imageUrl={imageUrlMap[params.image]}/>
    )
}