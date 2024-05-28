import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import {
  Container,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Box,
  Grid,
  Chip,
  Avatar,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../assets/css/styleSwipper.css";
import banner_bs from "../../img/Populares/banner/banner_pop_bs.jpg";
import icon_bs from "../../img/Populares/icon/icon_pop_bs.jpg";
import banner_lol from "../../img/Populares/banner/banner_pop_lol.jpg";
import icon_lol from "../../img/Populares/icon/icon_nov_lol.png";
import banner_genshin from "../../img/Populares/banner/banner_pop_genshin.jpg";
import icon_genshin from "../../img/Populares/icon/icon_nov_genshin.png";
import banner_honkai from "../../img/Populares/banner/banner_nov_honkai.jpg";
import icon_honkai from "../../img/Populares/icon/icon_nov_honkai.png";
import play_store from "../../img/play_store.png";

export default function Populares() {
  return (
    <Container>
      <Typography
        sx={{
          backgroundColor: "#A747AF",
          margin: "40px 0",
          textAlign: "left",
          fontWeight: "bold",
          fontSize: "2rem",
          backgroundSize: "cover",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Populares
      </Typography>
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        slidesPerView={"auto"}
        centeredSlides
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        <SwiperSlide>
          <Grid container sx={{ height: "450px" }}>
            <Grid item xs={12} sm={12} md={8}>
              <Card
                sx={{
                  height: { xs: "100%", sm: "100%", md: "450px" },
                  objectFit: "cover",
                }}
              >
                <CardMedia
                  sx={{ height: "inherit" }}
                  component="img"
                  image={banner_bs}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ background: "#1d1d22" }}>
              <Card
                sx={{
                  background: "#1d1d22",
                  color: "white",
                  boxShadow: "none",
                }}
              >
                <CardHeader
                  sx={{ color: "white" }}
                  avatar={
                    <Avatar
                      sx={{ height: "60px", width: "60px" }}
                      src={icon_bs}
                      aria-label="icon_bs"
                    ></Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      sx={{ color: "white", display: "flex", gap: "10px" }}
                    >
                      <img
                        src={play_store}
                        alt="Play Store"
                        style={{
                          width: 24,
                          height: 24,
                          marginLeft: 1,
                          borderRadius: "50%",
                        }}
                      />{" "}
                      <FavoriteBorderIcon />
                    </IconButton>
                  }
                  title={
                    <Typography
                      sx={{
                        color: "#a747af",
                        fontWeight: "bold",
                        fontSize: "18px",
                        textAlign: "left",
                      }}
                    >
                      Brawl Stars{" "}
                    </Typography>
                  }
                  subheader={
                    <Box sx={{ color: "#a747af", textAlign: "left" }}>
                      <Typography sx={{ color: "#a747af", fontSize: "15px" }}>
                        Supercell{" "}
                      </Typography>
                      <Typography sx={{ color: "white", fontSize: "12px" }}>
                        1.5 K de personas le gusta{" "}
                      </Typography>
                      <br />
                      <Chip
                        sx={{
                          background: "#383838",
                          color: "white",
                          fontWeight: "bold",
                          marginRight: "5px",
                        }}
                        label="Acción"
                      />
                      <Chip
                        sx={{
                          background: "#383838",
                          color: "white",
                          fontWeight: "bold",
                        }}
                        label="Móvil"
                      />
                    </Box>
                  }
                />
                <CardContent>
                  <Typography sx={{ textAlign: "justify", padding: "0 10px" }}>
                    Brawl Stars es un juego móvil de acción y estrategia
                    desarrollado por Supercell, donde los jugadores compiten en
                    diferentes modos de juego usando una variedad de personajes
                    únicos con habilidades especiales.{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container sx={{ height: "450px" }}>
            <Grid item xs={12} sm={12} md={8}>
              <Card
                sx={{
                  height: { xs: "100%", sm: "100%", md: "450px" },
                  objectFit: "cover",
                }}
              >
                <CardMedia
                  sx={{ height: "inherit" }}
                  component="img"
                  image={banner_lol}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ background: "#1d1d22" }}>
              <Card
                sx={{
                  background: "#1d1d22",
                  color: "white",
                  boxShadow: "none",
                }}
              >
                <CardHeader
                  sx={{ color: "white" }}
                  avatar={
                    <Avatar
                      sx={{ height: "60px", width: "60px" }}
                      src={icon_lol}
                      aria-label="icon_lol"
                    ></Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      sx={{ color: "white", display: "flex", gap: "10px" }}
                    >
                      <img
                        src={play_store}
                        alt="Play Store"
                        style={{
                          width: 24,
                          height: 24,
                          marginLeft: 1,
                          borderRadius: "50%",
                        }}
                      />{" "}
                      <FavoriteBorderIcon />
                    </IconButton>
                  }
                  title={
                    <Typography
                      sx={{
                        color: "#a747af",
                        fontWeight: "bold",
                        fontSize: "18px",
                        textAlign: "left",
                      }}
                    >
                      League of Legends{" "}
                    </Typography>
                  }
                  subheader={
                    <Box sx={{ color: "#a747af", textAlign: "left" }}>
                      <Typography sx={{ color: "#a747af", fontSize: "15px" }}>
                        Riot Games{" "}
                      </Typography>
                      <Typography sx={{ color: "white", fontSize: "12px" }}>
                        16.8 K de personas le gusta
                      </Typography>
                      <br />
                      <Chip
                        sx={{
                          background: "#383838",
                          color: "white",
                          fontWeight: "bold",
                          marginRight: "3px",
                        }}
                        label="Estrategia"
                      />
                      <Chip
                        sx={{
                          background: "#383838",
                          color: "white",
                          fontWeight: "bold",
                        }}
                        label="Pc"
                      />
                    </Box>
                  }
                />
                <CardContent>
                  <Typography sx={{ textAlign: "justify", padding: "0 10px" }}>
                    League of Legends es un juego de estrategia por equipos en
                    el que dos equipos de cinco campeones se enfrentan para ver
                    quién destruye antes la base del otro. Elige de entre un
                    elenco de 140 campeones para realizar jugadas épicas y
                    alzarte con la victoria.{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container sx={{ minHeight: "450px" }}>
            <Grid item xs={12} sm={12} md={8}>
              <Card
                sx={{
                  height: { xs: "100%", sm: "100%", md: "450px" },
                  objectFit: "cover",
                }}
              >
                <CardMedia
                  sx={{ height: "inherit" }}
                  component="img"
                  image={banner_genshin}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ background: "#1d1d22" }}>
              <Card
                sx={{
                  background: "#1d1d22",
                  color: "white",
                  boxShadow: "none",
                }}
              >
                <CardHeader
                  sx={{ color: "white" }}
                  avatar={
                    <Avatar
                      sx={{ height: "60px", width: "60px" }}
                      src={icon_genshin}
                      aria-label="icon_genshin"
                    ></Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      sx={{ color: "white", display: "flex", gap: "10px" }}
                    >
                      <img
                        src={play_store}
                        alt="Play Store"
                        style={{
                          width: 24,
                          height: 24,
                          marginLeft: 1,
                          borderRadius: "50%",
                        }}
                      />{" "}
                      <FavoriteBorderIcon />
                    </IconButton>
                  }
                  title={
                    <Typography
                      sx={{
                        color: "#a747af",
                        fontWeight: "bold",
                        fontSize: "18px",
                        textAlign: "left",
                      }}
                    >
                      Genshin Impact
                    </Typography>
                  }
                  subheader={
                    <Box sx={{ color: "#a747af", textAlign: "left" }}>
                      <Typography sx={{ color: "#a747af", fontSize: "15px" }}>
                        Hoyoverse{" "}
                      </Typography>
                      <Typography sx={{ color: "white", fontSize: "12px" }}>
                        10.3 K de personas le gusta
                      </Typography>
                      <br />
                      <Chip
                        sx={{
                          background: "#383838",
                          color: "white",
                          fontWeight: "bold",
                          marginRight: "5px",
                        }}
                        label="Acción"
                      />
                      <Chip
                        sx={{
                          background: "#383838",
                          color: "white",
                          fontWeight: "bold",
                        }}
                        label="Pc"
                      />
                    </Box>
                  }
                />
                <CardContent>
                  <Typography sx={{ textAlign: "justify", padding: "0 10px" }}>
                    Genshin Impact es un videojuego de rol de acción de mundo
                    abierto y gratuito, con una mecánica de monetización de
                    gacha para conseguir elementos adicionales como personajes
                    especiales y armas.{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container sx={{ minHeight: "450px" }}>
            <Grid item xs={12} sm={12} md={8}>
              <Card
                sx={{
                  height: { xs: "100%", sm: "100%", md: "450px" },
                  objectFit: "cover",
                }}
              >
                <CardMedia
                  sx={{ height: "inherit" }}
                  component="img"
                  image={banner_honkai}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ background: "#1d1d22" }}>
              <Card
                sx={{
                  background: "#1d1d22",
                  color: "white",
                  boxShadow: "none",
                }}
              >
                <CardHeader
                  sx={{ color: "white" }}
                  avatar={
                    <Avatar
                      sx={{ height: "60px", width: "60px" }}
                      src={icon_honkai}
                      aria-label="icon_honkai"
                    ></Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      sx={{ color: "white", display: "flex", gap: "10px" }}
                    >
                      <img
                        src={play_store}
                        alt="Play Store"
                        style={{
                          width: 24,
                          height: 24,
                          marginLeft: 1,
                          borderRadius: "50%",
                        }}
                      />{" "}
                      <FavoriteBorderIcon />
                    </IconButton>
                  }
                  title={
                    <Typography
                      sx={{
                        color: "#a747af",
                        fontWeight: "bold",
                        fontSize: "18px",
                        textAlign: "left",
                      }}
                    >
                      Honkai: Star Rail{" "}
                    </Typography>
                  }
                  subheader={
                    <Box sx={{ color: "#a747af", textAlign: "left" }}>
                      <Typography sx={{ color: "#a747af", fontSize: "15px" }}>
                        Hoyoverse
                      </Typography>
                      <Typography sx={{ color: "white", fontSize: "12px" }}>
                        27.4 K de personas le gusta
                      </Typography>
                      <br />
                      <Chip
                        sx={{
                          background: "#383838",
                          color: "white",
                          fontWeight: "bold",
                          marginRight: "5px",
                        }}
                        label="Gacha"
                      />
                      <Chip
                        sx={{
                          background: "#383838",
                          color: "white",
                          fontWeight: "bold",
                        }}
                        label="Móvil"
                      />
                    </Box>
                  }
                />
                <CardContent>
                  <Typography sx={{ textAlign: "justify", padding: "0 10px" }}>
                    En Honkai Star Rail, un tren viaja por las titilantes
                    estrellas, por una gran cantidad de impresionantes reinos.
                    Estos reinos pueden abarcar desde una estación espacial
                    futurista.{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
