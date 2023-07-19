
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const CardUser = ({dato}) => {

  const {img, name, price } = dato;

  return (
        <Card className='card'> 
          <CardActionArea>
            <CardMedia className='cardMedia'
            component="img"
            height="200"
            image= {img}
            alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {name}
              </Typography>
              <Typography variant="body2" color="text.secondary"> 
              ${price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
  );
}

export default CardUser;