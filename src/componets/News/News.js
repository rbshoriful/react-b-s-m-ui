import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const News = (props) => {
    const {urlToImage, title, description } = props.article;
    return (
        <div style={{ marginLeft: "100px" }}>
            <Card sx={{ maxWidth: 545, margin: '20px' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={urlToImage}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default News;