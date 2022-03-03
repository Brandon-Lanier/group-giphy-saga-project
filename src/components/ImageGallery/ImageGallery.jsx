import { useSelector } from 'react-redux';
import './ImageGallery.css';


function ImageGallery() {

    const imageList = useSelector(store => store.imageList)

    console.log('imageList is:', imageList);
    return (

        <div className="gallery">
            {imageList.map((image, i) => (
                <ImageItem 
                key={i}
                image={image}
                />
            ))}
        </div>
    )
}

export default ImageGallery;