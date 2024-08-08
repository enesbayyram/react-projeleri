import React from 'react'
import { ProductType } from '../types/Types'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
    product: ProductType
}

function ProductCard(props: ProductCardProps) {
    const { id, title, price, description, category, image, rating } = props.product;

    const navigate = useNavigate();
    return (
        <Card onClick={() => navigate(`/product-detail/${id}`)} sx={{ cursor: 'pointer', boxShadow: '1px 2px 3px lightgrey', width: '330px', height: '550px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '10px' }}>
            <img width={250} height={250} src={image} style={{ objectFit: 'contain' }} />
            <CardContent sx={{ height: '200px' }}>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description?.substring(1, 120)}...
                </Typography>
            </CardContent>
            <CardActions >
                <Button onClick={() => navigate(`/product-detail/${id}`)} sx={{ textTransform: 'none', color: 'black' }} variant='outlined' color='info' size="small">Detay</Button>
            </CardActions>
        </Card>

    )
}

export default ProductCard