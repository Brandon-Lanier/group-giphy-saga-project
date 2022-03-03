import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RecommendIcon from '@mui/icons-material/Recommend';

function ImageItem({ image }) {

    const handleLike = () => {
        console.log('I hit the like button');
    }

    console.log('image url is:', image.images.fixed_height.url);
    console.log('image Title is:', image.title);

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                alt={image.title}
                height="200"
                image={image.images.fixed_height.url}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
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