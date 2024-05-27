
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { useDispatch, useSelector } from "react-redux";
import { FileUpload } from 'primereact/fileupload';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

 function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toast = useRef(null);

  const onUpload = () => {
      toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  };
  const {currentUser} = useSelector((store)=> store.app);
  return (
    <div className="card-container" style={{ display: 'flex', height: '100vh' }}>
    <Card sx={{ width: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: '100%', height: '50%', objectFit: 'cover' }}
          image="src/assets/profile.jpg"
          alt="profile image"
        />
       </CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' ,padding:'20px', fontFamily: 'Oswald, sans-serif' }}>
            {currentUser.firstname} {currentUser.lastname}
          </Typography>
        </CardContent>
      <CardActions>
        <div className="card flex justify-content-center" style={{ width: '100%', textAlign: 'center', padding: '5px' }}>
          <Toast ref={toast}></Toast>
          <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} />
        </div>
      </CardActions>
    </Card>
    <Box sx={{ flexGrow: 1, height: '100%', ml: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="GENEL BİLGİLER" {...a11yProps(0)} />
          <Tab label="İZİN BİLGİLERİ" {...a11yProps(1)} />
          <Tab label="dEPARTMAN BİLGİLERİ" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Genel Bilgiler
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        İzin Bilgileri
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Departman Bilgileri
      </CustomTabPanel>
    </Box>
  </div>
  );
}

export default Profile;
