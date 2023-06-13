
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function CardUser ({dato}) {

  return (
        <Card className='card' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image= {dato.img}
            alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {dato.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {dato.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
  );
}

export default CardUser;