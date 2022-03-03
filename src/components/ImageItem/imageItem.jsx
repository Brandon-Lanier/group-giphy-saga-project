import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ImageItem({ image }) {

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                alt={image.title}
                height="200"
                image={image.original.url}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {image.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Like</Button>
            </CardActions>
        </Card>
    )
}

export default ImageItem;