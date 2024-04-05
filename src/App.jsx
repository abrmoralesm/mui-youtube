import { Container, Grid } from "@mui/material";

export default function App() {
  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            corporis quaerat nulla eius, sint quasi impedit neque unde dolorum
            ducimus hic. Veniam vitae ullam incidunt numquam cum ratione modi
            consectetur.
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            corporis quaerat nulla eius, sint quasi impedit neque unde dolorum
            ducimus hic. Veniam vitae ullam incidunt numquam cum ratione modi
            consectetur.
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            corporis quaerat nulla eius, sint quasi impedit neque unde dolorum
            ducimus hic. Veniam vitae ullam incidunt numquam cum ratione modi
            consectetur.
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}
