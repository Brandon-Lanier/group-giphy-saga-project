import { useEffect } from "react";
import { useSelector } from "react-redux";
import FavItem from '../FavItem/FavItem';
import { useDispatch } from "react-redux";

function FavGallery() {

    useEffect(() => {
        dispatch({type: 'GET_FAVORITES'});
    }, []);

    const favImages = useSelector(store => store.favoritesLis)
    const dispatch = useDispatch();

    console.log('what is newFavs', newFavs);

    const newFavs = favImages[0];

    return (
        <div>
            {newFavs.map((image, i) => (
                <FavItem 
                key={i}
                image={image}
                />
            ))}
        </div>


    ) 
}

export default FavGallery;