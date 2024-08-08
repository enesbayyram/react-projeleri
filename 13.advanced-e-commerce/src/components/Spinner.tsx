import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setLoading } from '../redux/appSlice';


function Spinner() {
    const { loading } = useSelector((state: RootState) => state.app);

    const dispatch = useDispatch();


    const handleClose = () => {
        dispatch(setLoading(false));
    }


    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default Spinner