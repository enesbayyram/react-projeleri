import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MagaraIcon from '../images/magara.png'
import { useNavigate } from 'react-router-dom';
import storageService from '../services/StorageService';
import { toast } from 'react-toastify';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { FaShoppingBasket } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/appSlice';
import Badge from '@mui/material/Badge';
import { RootState } from '../redux/store';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { FaSearch } from "react-icons/fa";
import { filterProducts, setProducts } from '../redux/productSlice';
import productService from '../services/ProductService';
import { ProductType } from '../types/Types';



function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { basket } = useSelector((state: RootState) => state.basket);
    const { products } = useSelector((state: RootState) => state.product);


    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    const logout = () => {
        storageService.clear("currentUser");
        toast.success("Çıkış yapıldı");
        navigate("/login");
    }

    const openDrawer = () => {
        dispatch(setDrawer(true));
    }

    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            dispatch(filterProducts(e.target.value));
        } else {
            const products: Array<ProductType> = await productService.getAllProducts();
            if (products) {
                dispatch(setProducts(products));
            }
        }

    }

    return (
        <AppBar position="static" sx={{ backgroundColor: '#464646' }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => navigate("/")}
                >
                    <img src={MagaraIcon} style={{ width: '60px', height: '60px' }} />
                </IconButton>
                <Typography onClick={() => navigate("/")} sx={{ fontWeight: 'bold', fontStyle: 'italic', flexGrow: 1, cursor: 'pointer' }} variant="h6" component="div" >
                    mağarayol
                </Typography>

                <TextField
                    id="input-with-icon-textfield"
                    placeholder='bir şey ara...'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FaSearch style={{ color: '#fff' }} />
                            </InputAdornment>
                        ),
                        style: {
                            borderBottom: '1px solid #fff',
                            color: '#fff',
                            fontSize: '14px'
                        }
                    }}
                    variant="standard"
                />

                <div onClick={openDrawer} style={{ cursor: 'pointer' }}>
                    <Badge sx={{ margin: '14px' }} badgeContent={basket ? basket.length : 0} color="warning">
                        <FaShoppingBasket style={{ fontSize: '20px' }} />
                    </Badge>
                </div>

                <Button onClick={logout} sx={{ textTransform: 'none', fontSize: '12px', fontFamily: 'arial' }} color="inherit">Çıkış yap</Button>

            </Toolbar>
        </AppBar >
    )
}

export default Navbar