import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Divider,
  Chip,
} from "@mui/material";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../assets/css/styleSwipper.css";
import banner_dl2 from "../../img/Ofertas/banner_ofe_dl2.jpg";
import banner_rs from "../../img/Ofertas/banner_ofe_rs.jpg";
import banner_sm2 from "../../img/Ofertas/banner_ofe_sm2.jpg";
import banner_sw from "../../img/Ofertas/banner_ofe_sw.jpg";
import banner_gow from "../../img/Ofertas/banner_ofe_gow.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function Ofertas() {
  const buttonColor = "#A747AF";

  return (
    <Container>
      <Typography
        sx={{
          margin: "20px 0",
          fontWeight: "bold",
          fontSize: "2rem",
          backgroundColor: "#A747AF",
          textAlign: "left",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Ofertas
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Swiper
          className="mySwiper"
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <Card sx={{ width: "100%", color: "white" }}>
              <CardMedia sx={{ height: 280 }} image={banner_sw} title="Star Wars Outlaws" />
              <CardContent sx={{ background: "#1d1d22", textAlign: "left" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", fontSize: "14px" }}
                >
                  Star Wars Outlaws (Xbox Series X|S) XBOX LIVE Key MEXICO{" "}
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#1f817d" }}>
                  Global
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#72708b" }}>
                  Por
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>MX$1109.00</Typography>
                <Typography sx={{ fontWeight: "bold", color: "#5bb832" }}>
                  10% de descuento
                </Typography>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <FavoriteBorderIcon></FavoriteBorderIcon> 22
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  background: "#1d1d22",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button sx={{ background: "#383838" }} variant="contained">
                  Ver más
                </Button>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card sx={{ width: "100%", color: "white" }}>
              <CardMedia sx={{ height: 280 }} image={banner_dl2} title="Dying Light 2 Stay Human" />
              <CardContent sx={{ background: "#1d1d22", textAlign: "left" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", fontSize: "14px" }}
                >
                  Dying Light 2 Stay Human - Reloaded Edition XBOX LIVE Key
                  MEXICO{" "}
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#1f817d" }}>
                  México
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#72708b" }}>
                  Por
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>MX$987.00</Typography>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <FavoriteBorderIcon></FavoriteBorderIcon> 11
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  background: "#1d1d22",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button sx={{ background: "#383838" }} variant="contained">
                  Ver más
                </Button>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card sx={{ width: "100%", color: "white" }}>
              <CardMedia sx={{ height: 280 }} image={banner_sm2} title="Marvel's Spider-Man 2" />
              <CardContent sx={{ background: "#1d1d22", textAlign: "left" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", fontSize: "14px" }}
                >
                  Marvel's Spider-Man 2 (PS5) PSN Key LATAM{" "}
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#1f817d" }}>
                  Global
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#72708b" }}>
                  Por
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>MX$834.00</Typography>
                <Typography sx={{ fontWeight: "bold", color: "#5bb832" }}>
                  40% de descuento
                </Typography>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <FavoriteBorderIcon></FavoriteBorderIcon> 192
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  background: "#1d1d22",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button sx={{ background: "#383838" }} variant="contained">
                  Ver más
                </Button>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card sx={{ width: "100%", color: "white" }}>
              <CardMedia sx={{ height: 280 }} image={banner_rs} title="Tom Clancy's Rainbow Six: Siege" />
              <CardContent sx={{ background: "#1d1d22", textAlign: "left" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", fontSize: "14px" }}
                >
                  Tom Clancy's Rainbow Six: Siege (Gold Edition) Xbox Live Key
                  MEXICO{" "}
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#1f817d" }}>
                  México
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#72708b" }}>
                  Por
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>MX$457.19</Typography>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <FavoriteBorderIcon></FavoriteBorderIcon> 129
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  background: "#1d1d22",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button sx={{ background: "#383838" }} variant="contained">
                  Ver más
                </Button>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card sx={{ width: "100%", color: "white" }}>
              <CardMedia sx={{ height: 280 }} image={banner_gow} title="God of War Ragnarök" />
              <CardContent sx={{ background: "#1d1d22", textAlign: "left" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", fontSize: "14px" }}
                >
                  God of War Ragnarök (PS5) PSN Key LATAM{" "}
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#1f817d" }}>
                  Global
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#72708b" }}>
                  Por
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>MX$851.12</Typography>
                <Typography sx={{ fontWeight: "bold", color: "#5bb832" }}>
                  25% de descuento
                </Typography>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <FavoriteBorderIcon></FavoriteBorderIcon>190
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  background: "#1d1d22",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button sx={{ background: "#383838" }} variant="contained">
                  Ver más
                </Button>
              </CardActions>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Chip
          icon={<KeyboardArrowDownIcon sx={{ color: buttonColor }} />}
          label="Ver más"
          clickable
          color="primary"
          variant="outlined"
          sx={{
            color: buttonColor,
            borderColor: "transparent",
            marginBottom: "10px",
          }}
        />
      </Box>
      <Root>
        <Divider sx={{ borderColor: "white" }} />
      </Root>
    </Container>
  );
}
