import { useMediaQuery } from "react-responsive";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Divider,
  Chip
} from "@mui/material";
import { styled } from "@mui/material/styles";
import banner_cr from "../../img/Novedades/banner/banner_nov_cr.jpg";
import banner_genshin from "../../img/Novedades/banner/banner_nov_genshin.jpg";
import banner_honkai from "../../img/Novedades/banner/banner_nov_honkai.jpg";
import banner_lol from "../../img/Novedades/banner/banner_nov_lol.png";
import banner_minecraft from "../../img/Novedades/banner/banner_nov_minecraft.jpg";
import banner_sg from "../../img/Novedades/banner/banner_nov_sg.png";
import icon_cr from "../../img/Novedades/icon/icon_nov_cr.jpg";
import icon_genshin from "../../img/Novedades/icon/icon_nov_genshin.png";
import icon_honkai from "../../img/Novedades/icon/icon_nov_honkai.png";
import icon_lol from "../../img/Novedades/icon/icon_nov_lol.png";
import icon_minecraft from "../../img/Novedades/icon/icon_nov_minecraft.jpg";
import icon_sg from "../../img/Novedades/icon/icon_nov_sg.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const novedadesData = [
  {
    title: "Genshin Impact",
    description: "Review Bombing polémica por el aniversario de Genshin Impact",
    banner: banner_genshin,
    icon: icon_genshin,
  },
  {
    title: "Minecraft",
    description:
      "Fan de Minecraft encuentra un objeto único en el juego que nunca nadie noto",
    banner: banner_minecraft,
    icon: icon_minecraft,
  },
  {
    title: "League of Legends",
    description:
      "Ajuste en la estrategia de Esports de League of Legends de Riot en 2024",
    banner: banner_lol,
    icon: icon_lol,
  },
  {
    title: "SkullGirls",
    description:
      "Skullgirls quiere ser políticamente correcto; censura arte de personajes y mucho más",
    banner: banner_sg,
    icon: icon_sg,
  },
  {
    title: "Honkai Star Rail",
    description:
      "Honkai: Star Rail 2.2 ya está disponible, y llega con nuevos personajes y un sinfín de novedades",
    banner: banner_honkai,
    icon: icon_honkai,
  },
  {
    title: "Clash Royale",
    description:
      "Clash Royale y Clash of Clans llegan por sorpresa a PC, ¿cómo jugarlos?",
    banner: banner_cr,
    icon: icon_cr,
  },
];

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));


export default function Novedades() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const sliderWidth = isMobile ? "100%" : "80%";

  const buttonColor = "#A747AF";

  return (
    <Box
      className="slider-container"
      sx={{
        margin: "0 auto",
        padding: "16px",
        maxWidth: sliderWidth,
        width: "100%",
      }}
    >
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
        Novedades
      </Typography>{" "}
      <Grid container spacing={2}>
        {novedadesData.map((novedad, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#2C2C34",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Avatar
                    src={novedad.icon}
                    sx={{ width: 25, height: 25, mr: 1 }}
                  />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#A747AF", fontSize: 14 }}
                  >
                    {novedad.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ fontWeight: "bold", textAlign: "left", fontSize: 14 }}
                >
                  {novedad.description}
                </Typography>
              </CardContent>
              <Box sx={{ flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  image={novedad.banner}
                  alt={novedad.title}
                  sx={{ objectFit: "cover", height: "100%" }}
                />
              </Box>
            </Card>
          </Grid>
          
        ))}
        
      </Grid>
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
    </Box>
  );
}
