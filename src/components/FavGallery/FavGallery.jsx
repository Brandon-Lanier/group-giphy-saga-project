import { useEffect } from "react";
import { useSelector } from "react-redux";
import FavItem from '../FavItem/FavItem';
import { useDispatch } from "react-redux";

function FavGallery() {

    useEffect(() => {
        dispatch({type: 'GET_FAVORITES'});
    }, []);

    const favImages = useSelector(store => store.favoritesList)
    const dispatch = useDispatch();

    
    // const newFavs = favImages[0];
    
    console.log('what is favImages', favImages);
    console.log('what is favImages[0]', favImages[0]);
    // console.log('what is newFavs', newFavs);
    // console.log('what is newFavs', newFavs);
    // console.log('what is newFavs', newFavs);
    return (
        <div>
            {favImages.map((image, i) => (
                <FavItem 
                key={i}
                image={image}
                />
            ))}
        </div>


    ) 
}

export default FavGallery;