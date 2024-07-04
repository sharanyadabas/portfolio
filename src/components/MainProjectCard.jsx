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
      <Card raised={true} sx={{ width: 600, bgcolor: "secondary.main" }} {...props}>
        <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
          <CardActionArea>
            <CardMedia component="img" height="300" image={image} alt={title} />
            <CardContent
              sx={{
                color: "text.primary",
                textAlign: "center"
              }}
              >
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                sx={{
                  fontWeight: "bold",
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
