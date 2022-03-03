import { useSelector } from 'react-redux';
import ImageItem from '../ImageItem/imageItem'
import './ImageGallery.css';


function ImageGallery() {

    const imageList = useSelector(store => store.imageList)

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