import { styled } from "@mui/material/styles";
import {
  Container,
  Avatar,
  Stack,
  Box,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import iconAccion from "../../img/Categorias/accion.png";
import iconAvent from "../../img/Categorias/aventura.png";
import iconFps from "../../img/Categorias/fps.png";
import iconRpg from "../../img/Categorias/rpg.png";
import iconIndie from "../../img/Categorias/indie.png";
import iconSim from "../../img/Categorias/simulacion.png";
import iconEstra from "../../img/Categorias/estrategia.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function Categorias() {
  const iconSize = "60%";
  const buttonColor = "#A747AF";

  return (
    <Container sx={{ marginBottom: "80px" }}>
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
        Categorías
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Avatar sx={{ height: "120px", width: "120px", background: "#1d1d22" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={iconAccion} style={{ width: "60%" }} />
            <Typography sx={{ fontWeight: "bold" }}> Acción</Typography>
          </Box>
        </Avatar>
        <Avatar sx={{ height: "120px", width: "120px", background: "#1d1d22" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={iconAvent} style={{ width: iconSize }} />
            <Typography sx={{ fontWeight: "bold" }}> Aventura</Typography>
          </Box>
        </Avatar>
        <Avatar sx={{ height: "120px", width: "120px", background: "#1d1d22" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={iconFps} style={{ width: iconSize }} />
            <Typography sx={{ fontWeight: "bold" }}> FPS/TPS</Typography>
          </Box>
        </Avatar>
        <Avatar sx={{ height: "120px", width: "120px", background: "#1d1d22" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={iconRpg} style={{ width: "140%" }} />
            <Typography sx={{ fontWeight: "bold" }}> RPG</Typography>
          </Box>
        </Avatar>
        <Avatar sx={{ height: "120px", width: "120px", background: "#1d1d22" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={iconIndie} style={{ width: iconSize }} />
            <Typography sx={{ fontWeight: "bold" }}> Indie</Typography>
          </Box>
        </Avatar>
        <Avatar sx={{ height: "120px", width: "120px", background: "#1d1d22" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={iconSim} style={{ width: iconSize }} />
            <Typography sx={{ fontWeight: "bold" }}> Simulación</Typography>
          </Box>
        </Avatar>
        <Avatar sx={{ height: "120px", width: "120px", background: "#1d1d22" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={iconEstra} style={{ width: iconSize }} />
            <Typography sx={{ fontWeight: "bold" }}> Estrategía</Typography>
          </Box>
        </Avatar>
      </Stack>

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
