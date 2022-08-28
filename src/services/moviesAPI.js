const moviesAPI =
  "https://my-json-server.typicode.com/Jeck99/movies-api/movies";
export default async function getMovies() {
  try {
    return await fetch(moviesAPI).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
