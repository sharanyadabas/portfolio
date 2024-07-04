import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ProjectCard({
  title,
  description,
  image,
  link,
  ...props
}) {
  return (
    <Card
      raised={true}
      sx={{ width: 280, bgcolor: "secondary.main" }}
      {...props}
    >
      <CardActionArea>
        <CardMedia component="img" height="150" image={image} alt={title} />
        <CardContent sx={{ height: "30px", textAlign: "center" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ margin: "0px", fontWeight: "bold" }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
