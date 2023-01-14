
import React, {  useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';


export default function Collage() {

    const [collageIds, setCollageIds] = useState();

    const loadCollages = async () => {
        try {
            // here?
            console.log('running?')
            const res = await fetch('/api/v1/collage');
            const data = await res.json();
            setCollageIds(data);
            console.log(data)
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        loadCollages();
    }, 
    // removing this from the dependency callback:
    // loadImages
    []);

    return (
       <div className='scroll'>
        {/* <h1>collage</h1> */}
            <div className='gallery'>
                {/* <img
                className='image-style'
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1671044113/tc_collage/4B868156-586C-430B-82DC-7D1D71BCCB2B_nxclh5.png'
                alt='mixed media collage'
                >
                </img>
                <img
                className='image-style'
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1671044113/tc_collage/killtheroot_d7hvwk.png'
                alt='mixed media collage'
                >
                </img> */}
                {collageIds &&
                collageIds.map((collageId, index) => (
                // Image - defines a Cloudinary Image tag
                <Image
                    className="image-style"
                    alt='mixed media collage'
                    key={index}
                    cloudName={'dxov7pk4a'}
                    publicId={collageId}
                    width="500"
                    crop="scale"
                />
                ))}
            </div>
       </div>
    )
};

