import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  return fetch(API_URL).then((response) => response.json());
}

export default async function Hello() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const movies = await getMovies();

  return (
    <div>
      <h1>&copy Hello!</h1>
      <ul>
        {movies.map((a) => (
          <li key={a.id}>
            <Link href={`/movies/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
