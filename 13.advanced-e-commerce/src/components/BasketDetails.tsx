import React, { useEffect } from 'react'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setDrawer, updateBalance } from '../redux/appSlice';
import { Button } from '@mui/material';
import { calculateBasket, removeProductFromBasket, setBasket } from '../redux/basketSlice';
import { toast } from 'react-toastify';


function BasketDetails() {

    const { drawer, currentUser } = useSelector((state: RootState) => state.app);
    const { basket, totalAmount } = useSelector((state: RootState) => state.basket);
    const dispatch = useDispatch();

    const closeDrawer = () => {
        dispatch(setDrawer(false));
    }

    useEffect(() => {
        dispatch(calculateBasket());
    }, [basket])

    const removeProduct = (productId: number | undefined) => {
        if (productId) {
            dispatch(removeProductFromBasket(productId));
        }
    }

    const buy = () => {
        if (currentUser?.balance && totalAmount > currentUser.balance) {
            toast.warn("Bakiyeniz yeterli değildir")
            return;
        }

        const remaningBalance: number | undefined = currentUser?.balance && currentUser.balance - totalAmount;
        if (remaningBalance) {
            dispatch(updateBalance(remaningBalance));
            dispatch(setBasket([]))
        }
        toast.success("Siparişiniz alınmıştır , iyi günlerde kullanmanız dileğiyle :)")
    }

    return (
        <Drawer open={drawer} anchor='right' sx={{ width: '250px' }} onClose={closeDrawer}>
            {
                basket && basket.map((product) => (
                    <div key={product.id} className='basket-details'>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', margin: '20px' }}>
                            <div style={{ marginRight: '20px' }}><img src={product?.image} width={60} height={60} alt={product?.title} /></div>
                            <div style={{ width: '320px' }}>
                                <div style={{ fontWeight: 'bold', fontFamily: 'arial', fontSize: '14px' }}>{product?.title}</div>
                                <div>{product?.description && product?.description.substring(0, 40)}</div>
                            </div>

                            <div style={{ marginLeft: '20px', fontWeight: 'bold', fontSize: '15px', fontFamily: 'arial' }}>{product?.count}</div>

                            <div style={{ marginLeft: '30px', fontWeight: 'bold', fontSize: '17px', color: 'black', width: '70px' }}>{product?.price}₺</div>

                            <div><Button onClick={() => removeProduct(product.id)} sx={{ textTransform: 'none', height: '25px' }} variant='outlined' size='small'>Çıkar</Button></div>
                        </div>
                    </div>
                ))
            }
            <div style={{ fontFamily: 'arial', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', margin: '10px 20px' }}>
                <div>Toplam tutar : {totalAmount.toFixed(3)}₺</div>
                <div><Button onClick={buy} size='small' variant='outlined' sx={{ marginTop: '20px' }} color='warning'>Satın Al</Button></div>
            </div>
        </Drawer>
    )
}

export default BasketDetails