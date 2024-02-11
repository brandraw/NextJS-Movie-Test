import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("ㅈ댓다...");
  // const response = await fetch(`${API_URL}/${id}`);
  // return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div>
      <h3>영화정보</h3>
      <div>{JSON.stringify(movie)}</div>
    </div>
  );
}
