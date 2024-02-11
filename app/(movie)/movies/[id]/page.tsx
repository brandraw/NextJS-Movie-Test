import { Suspense } from "react";
import MovieInfo from "../../../../components/Movie-info";
import MovieVideos from "../../../../components/Movie-videos";

export default function MovieDetail({ params: { id }, searchParams }) {
  return (
    <div>
      <h2>영화보기!!!! {id}</h2>

      <Suspense fallback={<h5>쉿... 영화정보 로딩중...</h5>}>
        <MovieInfo id={id}></MovieInfo>
      </Suspense>
      <Suspense fallback={<h5>쉿... 예고편 로딩중...</h5>}>
        <MovieVideos id={id}></MovieVideos>
      </Suspense>
    </div>
  );
}
