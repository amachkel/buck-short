import React from "react";
import Background from "../assets/images/background.png";
import Logo from "../assets/images/Logos/a-buck-3.png";
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
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
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
          flexDirection: "column",
          justifyContent: "space-around",
          minHeight: "100vh",
        }}
      >
        <Box
          component={"img"}
          className="logo"
          src={Logo}
          sx={{
            height: 300,
            maxWidth: 400,
            mx: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        />
        {/* <Scroll to="welcome" smooth={true}> */}
        <IconButton>
          <ExpandMoreIcon
            sx={{
              fontSize: "8rem",
              color: "#FFF",

              justifyContent: "flex-end",
              alignItems: "center",
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
