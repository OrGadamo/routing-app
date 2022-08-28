import "./MoviesDetails.css";
import MoviesTable from "../../features/MovieTable/MovieTable";

function MoviesDetails() {
  return (
    <div className="movies-details">
      <h1>MoviesDetails</h1>
      <div id="table_con">
        <MoviesTable />
      </div>
    </div>
  );
}

export default MoviesDetails;
