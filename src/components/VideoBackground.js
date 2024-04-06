import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ videoId }) => {
  const data = useMovieTrailer(videoId);

  return (
    <div className="w-full lg:aspect-[16/8] max-lg:h-svh overflow-hidden object-cover flex justify-center items-center relative">
      {data ? (
        <iframe
          src={`https://www.youtube.com/embed/${data?.key}?si=mJdBTGXnPxjRcba7&mute=1&autoplay=1&Version=3&loop=1&playlist=${data?.key}&rel=0&controls=0&egm=0`}
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          draggable="false"
          className="w-full aspect-video max-lg:scale-[1.8] max-md:scale-[2.5] max-sm:scale-[3] pointer-events-none"
        ></iframe>
      ) : (
        ""
      )}
      <div className="absolute w-full h-[300px] top-0 left-0 bg-gradient-to-b from-black"></div>
    </div>
  );
};

export default VideoBackground;
