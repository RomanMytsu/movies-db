import { Container, Typography } from "@mui/material";
import CountdownText from "./CountdownText";
import { CountdownVideo } from "./CountdownVideo";
import MapView from "./MapView";

export function About() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h5" align="center">
        <CountdownText />
        <CountdownVideo />
        <MapView />
      </Typography>
    </Container>
  );
}
