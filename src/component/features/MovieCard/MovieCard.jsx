import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MovieCard({ details }) {
  const { cast, genres, title, year } = details;
  return (
    <Card sx={{ maxWidth: 400, m: 2 }} style={{ backgroundColor: "#1e1e1e" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={`https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8=`}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            color="common.white"
          >
            {title}
          </Typography>
          <Typography variant="h6" color="common.white">
            Premiere: {year}
          </Typography>
          <Typography variant="h6" color="common.white">
            genres: {genres?.map((genre) => `-${genre}-`)}
          </Typography>
          <Typography variant="h6" color="common.white">
            cast: {cast?.map((actor) => `${actor} ,`)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
