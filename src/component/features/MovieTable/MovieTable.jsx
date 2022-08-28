import { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MoviesContext } from "../../../contexts/MoviesContext";

export default function MoviesTable() {
  const { movies } = useContext(MoviesContext);
  console.log(movies);
  return (
    <TableContainer sx={{ maxWidth: 1400 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Genres</TableCell>
            <TableCell align="right">years</TableCell>
            <TableCell align="right">Cast</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies?.map((movie) => (
            <TableRow
              key={movie.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {movie.title}
              </TableCell>
              <TableCell align="right">{movie.genres[0]}</TableCell>
              <TableCell align="right">{movie.year}</TableCell>
              <TableCell align="right">
                {movie.cast?.map((actor) => `${actor},`)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
