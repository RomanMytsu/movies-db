import { Container } from "@mui/material";
import CountDownText from "./CountDownText";
import { CountDownVideo } from "./CountDownVideo";

function About() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <CountDownText />
      <CountDownVideo />
    </Container>
  );
}

export default About;
