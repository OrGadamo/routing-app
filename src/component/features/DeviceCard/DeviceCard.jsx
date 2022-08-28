import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

export default function DeviceCard({
  brand,
  color,
  date,
  isAvailable,
  price,
  ram,
}) {
  return (
    <Card
      sx={{ minWidth: 400, m: 2 }}
      style={{ backgroundColor: "#323251" }}
      className="cards"
    >
      <CardMedia
        component="img"
        height="400"
        image="https://img.freepik.com/premium-vector/generation-smart-phones_1302-15164.jpg?w=2000"
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5" color="common.white" gutterBottom>
          Brand: {brand}
        </Typography>
        <Typography variant="h5" color="common.white">
          Created At: {date}
        </Typography>
        <Typography variant="h5" color="common.white">
          Color: {color}
        </Typography>
        <Typography variant="h5" color="common.white">
          IN stock: {isAvailable.toString()}
        </Typography>
        <Typography variant="h5" color="common.white">
          Price: {price}$
        </Typography>
        <Typography variant="h5" color="common.white">
          RAM:{ram}TB
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
