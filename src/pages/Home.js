import React from "react";
import Logo from "../assets/images/Logos/buck-short.png";
// import { Link as Scroll } from "react-scroll";
import { styled } from "@mui/system";
import {
  CssBaseline,
  Typography,
  Box,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HomeStyled = styled("div")({
  minHeight: "100vh",
  backgroundImage: `url(${Logo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
});

export default function Home() {
  // const [checked, setChecked] = useState(false);
  // useEffect(() => {
  //   setChecked(true);
  // }, []);
  return (
    <HomeStyled>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          minHeight: "100vh",
        }}
      >
        {/* <Scroll to="welcome" smooth={true}> */}
        <IconButton>
          <ExpandMoreIcon
            sx={{
              fontSize: "8rem",
              color: "#000000",
            }}
          />
        </IconButton>
        {/* </Scroll> */}
      </Box>
    </HomeStyled>
  );
}

{
  /* <Box sx={{ width: 300, height: 300 }}>
        <Typography color={"#000000"}>
          A Buck Short Productions is a film production company based out of
          Hampton, Georgia. Writer and director, Richard Tanner, began A Buck
          Short after an unfortunate run-in with a cold-hearted bitch. Though
          the journey was long and painful, they emerged from the toxic waste as
          film makers, a strong team, and kick-ass kung-fu masters!
        </Typography>
      </Box> */
}
