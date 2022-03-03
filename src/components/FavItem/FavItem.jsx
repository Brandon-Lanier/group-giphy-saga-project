import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RecommendIcon from '@mui/icons-material/Recommend';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function FavItem({image}) {

    const dispatch = useDispatch();

    const [category, setCategory] = useState('');

    const handleChange = (e) => {
        setCategory(e.target.value);
        
    }

    const updateCategory = () => {
        dispatch({type: 'UPDATE_CATEGORY', payload: [category, image]});
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
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={funny}>Funny</MenuItem>
          <MenuItem value={cohort}>Cohort</MenuItem>
          <MenuItem value={cartoon}>Cartoon</MenuItem>
          <MenuItem value={nsfw}>NSFW</MenuItem>
          <MenuItem value={meme}>Meme</MenuItem>
        </Select>
      </FormControl>
        </CardActions>
    </Card>
    )
}

export default FavItem;