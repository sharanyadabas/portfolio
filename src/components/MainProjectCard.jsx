import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function MainProjectCard({
  title,
  description,
  image,
  link,
  ...props
}) {
  return (
    <div display="flex">
      <Card raised={true} sx={{ width: 600 }} {...props}>
        <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
          <CardActionArea>
            <CardMedia component="img" height="300" image={image} alt={title} />
            <CardContent
              sx={{
                color: "text.primary", // Ensures the text color is white
                paddingLeft: "20px",
                textAlign: "center"
              }}
              >
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                sx={{
                  fontWeight: "bold",
                  textShadow: "1px 1px 2px black", 
                  letterSpacing: "0.05em", 
                  textTransform: "uppercase",
                  margin: "0px"
                }}
              >
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
}
