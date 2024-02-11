import Movie from "../../components/Movie";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  return fetch(API_URL).then((response) => response.json());
}

export default async function Hello() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const movies = await getMovies();

  return (
    <div>
      <h1>쩌는 사이트에 오신 것을 환영합니다!!</h1>
      <div className={styles.container}>
        {movies.map((a) => (
          <Movie
            key={a.id}
            id={a.id}
            poster_path={a.poster_path}
            title={a.title}
          ></Movie>
        ))}
      </div>
    </div>
  );
}
