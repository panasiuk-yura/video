import { useRef, useState } from 'react';
import Player from 'react-player';


const MainPlayerMob = () => {
  const url = 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4';
  const playerRef = useRef(null)
  const [ isPlay, setIsPlay ] = useState(false);
  const [ isMuted, setIsMuted ] = useState(true);

  const handlePlay = () => {
    setIsMuted(false);
    setIsPlay(!isPlay);
  }
  
  const handleEnd = () => {
    playerRef.current.seekTo(0);
    setIsPlay(false);
    setIsMuted(true);
  }
  

  return (
    <div
      className={`MainPlayerMob${isPlay?' MainPlayerMob--playing':'' }`}
      onClick={handlePlay}
    >
      <div className="MainPlayerMob__cover"><span>+</span></div>
      <Player
        ref={playerRef}
        width='200px'
        height='auto'
        style={{margin: '0 auto'}}
        volume={1}
        muted={isMuted}
        loop={false}
        playing={isPlay}
        playbackRate={1}
        playsinline={true}
        url={url}
        onEnded={handleEnd}
      />
    </div>
  )
};

export default MainPlayerMob;