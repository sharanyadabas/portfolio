import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function ActionAreaCard({
  size: { width, height },
  title,
  description,
  image,
  link,
}) {
  return (
    <Card sx={{ maxWidth: width }}>
      <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={height}
            image={image}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
