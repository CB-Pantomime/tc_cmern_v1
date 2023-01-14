
import React, { useEffect, useState, Fragment } from 'react';
import { Image } from 'cloudinary-react';
import { useAuthContext } from '../hooks/useAuthContext'
import Upload from '../components/Upload';

export default function Scroll() {
    
    const { user } = useAuthContext();
    const [imageIds, setImageIds] = useState();

    const loadImages = async () => {
        try {
            const res = await fetch('/api/v1/blogs');
            const data = await res.json();
            setImageIds(data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        loadImages();
    }, 
    // removing this from the dependency callback:
    // loadImages
    []);

    return (
        <div className="scroll">

        {/* Returns for public */}
        {!user && <div className='blogs'>        
        {/* <h1 className="gallery-title"></h1> */}
            <div className='gallery'>
            {imageIds &&
            imageIds.map((imageId, index) => (
                // Image - defines a Cloudinary Image tag
                <Image
                    className="single-image"
                    key={index}
                    cloudName={'dxov7pk4a'}
                    publicId={imageId}
                    width="500"
                    crop="scale"
                />
                ))}
            </div>
        </div>
        }
        {/* Returns for auth/logged in */}
        {user && 
        <Fragment>
            <Upload />  
        <div className='blogs'>     
        {/* <h1 className="gallery-title"></h1> */}
            <div className="gallery">
            {imageIds &&
                imageIds.map((imageId, index) => (
                    // Image - defines a Cloudinary Image tag
                    <Image
                        className="single-image"
                        key={index}
                        cloudName={'dxov7pk4a'}
                        publicId={imageId}
                        width="500"
                        crop="scale"
                    />
                ))}
            </div>
        </div>           
        </Fragment>
        }       

{/* Last DIV */}
</div>  
)};

