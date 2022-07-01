import React from "react";
import Logo from "../assets/images/Logos/buck-short.png";
import { styled } from "@mui/system";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
const HomeStyled = styled("div")({
  minHeight: "100%",
  backgroundImage: `url(${Logo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
});

export default function Home() {
  return (
    <HomeStyled>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        A Buck Short Productions is a film production company based out of
        Hampton, Georgia. Writer and director, Richard Tanner, began A Buck
        Short after an unfortunate run-in with a cold-hearted bitch. Though the
        journey was long and painful, they emerged from the toxic waste as film
        makers, a strong team, and kick-ass kung-fu masters!
      </Box>
    </HomeStyled>
  );
}
