import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import axios from "../config/Config";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import userService from "../components/services/UserService";

function User() {
  const { userId } = useParams();
  const [expanded, setExpanded] = useState(false | "");
  const [commentActivities, setCommentActivities] = useState([]);
  const [postActivities, setPostActivities] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [avatar, setAvatar] = useState();

  let sayac = 1;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    display: "flex",
    width: "660px",
    p: 4,
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getTop5CommentsByUser = async (userId) => {
    try {
      const response = await axios.get(`/comments/activity/${userId}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      const { data, errorMessage, result } = response.data;
      if (result) {
        setCommentActivities(data);
      } else {
      }
    } catch (error) {}
  };

  const getTop5PostsByUser = async (userId) => {
    try {
      const response = await axios.get(`/posts?userId=${userId}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      const { data, errorMessage, result } = response.data;
      if (result) {
        setPostActivities(data);
      } else {
      }
    } catch (error) {}
  };

  const updateAvatar = async (avatarNumber) => {
    await axios.put(
      `/users/${userId}`,
      {
        username: currentUser.username,
        password: currentUser.password,
        avatar: avatarNumber,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  };

  const handleModelOpen = () => {
    setOpenModal(true);
  };

  const chooseProfile = (value) => {
    updateAvatar(value);
    setAvatar(value);
    handleModelClose();
  };

  const handleModelClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    getTop5CommentsByUser(userId);
  }, []);

  useEffect(() => {
    getTop5PostsByUser(userId);
  }, []);

  useEffect(() => {
    try {
      userService.getUser(userId).then((res) => {
        const { result, errorMessage, data } = res;
        console.log("avatar", data.avatar);
        if (result) {
          setCurrentUser(data);
          setAvatar(data.avatar);
        } else {
          console.log("user bilgileri alinirken hata olustu : ", errorMessage);
        }
      });
    } catch (error) {
      console.log("user - hata olustu : ", error);
    }
  }, []);

  return (
    <Stack id="x" direction="row" sx={{ width: "100%" }}>
      <Modal
        open={openModal}
        onClose={handleModelClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Box style={{ flexWrap: "wrap" }} sx={style}>
            {[1, 2, 3, 4, 5, 6].map((value) => {
              return (
                <Button key={value} onClick={() => chooseProfile(value)}>
                  <Card sx={{ width: "200px", height: "200px" }}>
                    <CardMedia
                      sx={{
                        height: 300,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      image={`/src/assets/avatars/avatar${value}.png`}
                      title="User avatar"
                    />
                  </Card>
                </Button>
              );
            })}
          </Box>
        </>
      </Modal>

      <Card sx={{ margin: "100px 50px", width: "290px" }}>
        <CardMedia
          sx={{
            height: 300,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          image={`/src/assets/avatars/avatar${avatar}.png`}
          title="User avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {currentUser.username}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleModelOpen} size="small">
            Profil Değiştir
          </Button>
        </CardActions>
      </Card>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "center",
          margin: "100px",
          width: "70%",
        }}
      >
        <Accordion
          expanded={expanded == "panel1"}
          onChange={handleChange("panel1")}
          sx={{ marginBottom: "15px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Paylaşılan Son 5 Gönderi</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Sıra</TableCell>
                    <TableCell align="right">Başlık</TableCell>
                    <TableCell align="right">Açıklama</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {postActivities.map((postActivity) => (
                    <TableRow
                      key={postActivity.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="right">{sayac++}</TableCell>
                      <TableCell align="right">{postActivity.title}</TableCell>
                      <TableCell align="right">{postActivity.text}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded == "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Son 5 Yorum</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {commentActivities.map((comment) => {
              return (
                <div key={comment.commentId}>
                  <Typography>
                    Post Başlığı :{" "}
                    <span style={{ color: "red" }}>{comment.postTitle} </span>
                  </Typography>
                  <Typography sx={{ marginLeft: "20px", marginBottom: "25px" }}>
                    yorum : {comment.commentText}
                  </Typography>
                  <hr style={{ border: "1px solid lightgrey" }} />
                </div>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </div>
    </Stack>
  );
}

export default User;
