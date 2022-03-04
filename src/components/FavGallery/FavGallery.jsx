import { useEffect } from "react";
import { useSelector } from "react-redux";
import FavItem from '../FavItem/FavItem';

function FavGallery() {

    useEffect(() => {
        getFavs();
    }, []);

    const favImages = useSelector(store => store.favoritesList)

    const getFavs = () => {
        dispatch({type: 'GET_FAVORITES'})
    }

    return (
        <div>
            {favImages.map(image => (
                <FavItem 
                key={image.id}
                image={image}
                />
            ))}
        </div>


    ) 
}

export default FavGallery;