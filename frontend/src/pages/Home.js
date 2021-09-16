import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';

export default function Home() {
    const [imageIds, setImageIds] = useState();
    const loadImages = async () => {
        try {
            const res = await fetch('/api/images');
            console.log(res,'soy res')
            const data = await res.json();
            console.log(data,'soy data')

            setImageIds(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadImages();
    }, []);

    return (
        <div>
            <h1 className="title">Cloudinary Gallery</h1>
            <div className="gallery">
                {imageIds &&
                    imageIds.map((imageId, index) => (
                        <Image
                            key={index}
                            cloudName='cloudinary_event'
                            publicId={`https://res.cloudinary.com/event-pf/image/upload/v1631749176/${imageId}`}
                            width="300"
                            height="200"
                            crop="scale"
                        />
                    ))}
            </div>
        </div>
    );
}
