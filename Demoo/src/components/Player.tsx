import ReactPlayer from "react-player";

export const Player = () => {
  return (
    <ReactPlayer
      url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      controls
    />
  );
};
