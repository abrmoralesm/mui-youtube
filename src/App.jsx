import { Button, Container, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function App() {
  return (
    <Container>
      <h1>App</h1>
      <Typography variant='h3' color='primary'>
        H3 título
      </Typography>
      <Button variant='contained' color='error' startIcon={<AdbIcon/>}>
        {" "}
        Mi primer botón
      </Button>
      <Button variant='outlined' color='success'endIcon={<AcUnitIcon/>}>
        {" "}
        Mi primer botón
      </Button>
    </Container>
  );
}
