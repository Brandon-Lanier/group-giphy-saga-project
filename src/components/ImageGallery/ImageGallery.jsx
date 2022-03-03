import { useSelector } from 'react-redux';



function ImageGallery() {

    const imageList = useSelector(store => store.imageList)

    return (

        <div>
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