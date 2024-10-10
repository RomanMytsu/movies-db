import { Container } from "@mui/material";
import CountDownText from "./CountDownText";
import { CountDownVideo } from "./CountDownVideo";
import MapView from "./MapView";

function About() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <CountDownText />
      <CountDownVideo />
      <MapView />
    </Container>
  );
}

export default About;
