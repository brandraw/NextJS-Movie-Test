import { API_URL } from "../app/constants";
import styles from "../styles/Movie-info.module.css";

export async function getMovie(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("ㅈ댓다...");
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      ></img>
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          공식홈페이지
        </a>
      </div>
    </div>
  );
}
