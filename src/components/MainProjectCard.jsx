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
      <Card sx={{ width: 600 }} {...props}>
        <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
          <CardActionArea>
            <CardMedia component="img" height="350" image={image} alt={title} />
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
    </div>
  );
}
