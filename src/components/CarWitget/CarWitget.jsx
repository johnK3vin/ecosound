
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CarWitget = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '2rem',
            margin: '2rem',
            fontSize: '2rem'
        }}>
            <ShoppingCartIcon style={{
                fontSize: '3rem'
            }}/>
            <span>2</span>
        </div>
    )
}

export default CarWitget;