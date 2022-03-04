import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RecommendIcon from '@mui/icons-material/Recommend';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function ImageItem({ image }) {

    const dispatch = useDispatch();

    // const [likedGif, setLikedGif] = useState({})

    const handleLike = () => {
        dispatch({type: 'ADD_LIKED', payload: image})
    }


    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                alt={image.title}
                height="150"
                image={image.images.fixed_height.url}
            />
            <CardContent>
                <Typography gutterBottom variant="b1" component="div">
                    {image.title}
                </Typography>
            </CardContent>
            <CardActions>
                <RecommendIcon onClick={handleLike} />
            </CardActions>
        </Card>
    )
}

export default ImageItem;