// src/sections/NonAuthHomeView.tsx

import { Container, Typography } from "@mui/material";

export default function NonAuthHomeView() {
  return (
    <Container>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Domovská hrianka - No frogs found
      </Typography>
      <Typography>
        Register to enter the tavern of amphibians!
      </Typography>
    </Container>
  );
}