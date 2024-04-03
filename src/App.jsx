import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";

export default function App() {
  return (
    <Container sx={{ border: 3, boxShadow: 3, pb: 2 }}>
      <h1>App</h1>
      <Box
        sx={{
          border: 2,
          p: 5,
          borderColor: "peru",
          bgcolor: "#111",
          color: "white",
        }}
        component="span"
      >
        Pero que hermoso es MUI
      </Box>
      <Button variant='contained'> Mi primer botón</Button>
    </Container>
  );
}
