import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function MainProjectCard({
  title,
  image,
  link,
  linkgithub,
  ...props
}) {
  return (
    <div display="flex">
      <Card
        raised={true}
        sx={{
          width: 600,
          bgcolor: "secondary.main",
        }}
        {...props}
      >
        <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={image}
              alt={title}
            ></CardMedia>
          </CardActionArea>
        </Link>
        <CardContent
          sx={{
            color: "text.primary",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingBottom: "16px !important",
          }}
        >
          <Typography
            gutterBottom
            component="div"
            sx={{
              fontWeight: "bold",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              margin: "0px",
              fontSize: "50px",
            }}
          >
            {title}
          </Typography>
          {linkgithub !== "" && (
            <IconButton
              color="inherit"
              component="a"
              href={linkgithub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ fontSize: "40px" }} />
            </IconButton>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
