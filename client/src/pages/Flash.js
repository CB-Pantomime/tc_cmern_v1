
import React, {  useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';


export default function Collage() {

    const [flashIds, setFlashIds] = useState();

    const loadFlash = async () => {
        try {
            const res = await fetch('/api/v1/flash');
            const data = await res.json();
            setFlashIds(data);
            console.log(data)
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        loadFlash();
    }, 
    // removing this from the dependency callback:
    // loadImages
    []);

    return (
       <div className='scroll'>
        {/* <h1>collage</h1> */}
            <div className='gallery'>
                {flashIds &&
                flashIds.map((flashId, index) => (
                // Image - defines a Cloudinary Image tag
                <Image
                    className="flash-image-style"
                    alt='mixed media collage'
                    key={index}
                    cloudName={'dxov7pk4a'}
                    publicId={flashId}
                    width="500"
                    crop="scale"
                />
                ))}
            </div>
       </div>
    )
};

