import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/Movie-info";
import MovieVideos from "../../../../components/Movie-videos";

export async function generateMetadata({ params: { id } }) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default function MovieDetail({ params: { id }, searchParams }) {
  return (
    <div>
      <Suspense fallback={<h5>쉿... 영화정보 로딩중...</h5>}>
        <MovieInfo id={id}></MovieInfo>
      </Suspense>
      <Suspense fallback={<h5>쉿... 예고편 로딩중...</h5>}>
        <MovieVideos id={id}></MovieVideos>
      </Suspense>
    </div>
  );
}
