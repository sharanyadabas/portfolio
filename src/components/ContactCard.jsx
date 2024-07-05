import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import Tooltip from "@mui/material/Tooltip";

export default function ContactCard({
  name,
  description,
  headerImage,
  image,
  linkEmail,
  linkLinkedin,
  linkGithub,
  phoneNumber,
  ...props
}) {
  const iconSize = "50px";
  const fontColor = "#f5f7fa";
  return (
    <Card
      sx={{
        width: "450px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
        bgcolor: "primary.main",
        backgroundImage: "none !important",
        border: "5px solid",
        borderColor: "primary.main",
      }}
      raised={true}
      {...props}
    >
      <CardMedia
        component="img"
        height="180px"
        image={headerImage}
        alt={name}
        sx={{ position: "relative" }}
      />
      <Avatar
        alt={name}
        src={image}
        sx={{
          position: "absolute",
          top: "34%",
          transform: "translateY(-50%)",
          width: "160px",
          height: "160px",
          border: "10px solid",
          borderColor: "primary.main",
        }}
      />
      <CardContent
        sx={{
          height: "350px",
          textAlign: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "0 !important",
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color={fontColor}
          sx={{ marginTop: "100px", flexGrow: "0", fontSize: "40px" }}
        >
          {name}
        </Typography>
        <Typography variant="body1" color={fontColor} sx={{ fontSize: "18px" }}>
          {description}
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ flexGrow: "1" }}
        >
          <Tooltip title={linkLinkedin}>
            <IconButton
              component="a"
              href={linkLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: `${fontColor}` }}
            >
              <LinkedInIcon sx={{ fontSize: `${iconSize}` }} />
            </IconButton>
          </Tooltip>
          <Tooltip title={linkGithub}>
            <IconButton
              component="a"
              href={linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: `${fontColor}` }}
            >
              <GitHubIcon sx={{ fontSize: `${iconSize}` }} />
            </IconButton>
          </Tooltip>
          <Tooltip title={linkEmail}>
            <IconButton
              component="a"
              href={`mailto:${linkEmail}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: `${fontColor}` }}
            >
              <EmailIcon sx={{ fontSize: `${iconSize}` }} />
            </IconButton>
          </Tooltip>
          <Tooltip title={phoneNumber}>
            <IconButton sx={{ color: `${fontColor}` }}>
              <PhoneIcon sx={{ fontSize: `${iconSize}` }} />
            </IconButton>
          </Tooltip>
        </Stack>
      </CardContent>
    </Card>
  );
}
