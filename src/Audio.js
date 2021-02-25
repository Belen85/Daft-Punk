import { useRef, useState } from 'react';



function Audio({title, link, style}) {
const [isplaying, setIsplaying] = useState(false);
const audioRef = useRef();

const playSong =() => {
    audioRef.current.play();
    setIsplaying(true);
    console.log(audioRef.current.duration);
};




return(
    <div>
        <button className={`${style} m-2 rounded`} type="button" onClick={playSong} status={isplaying}>{title}
        </button>
        <audio ref={audioRef}><source src={link} type="audio/mpeg"/></audio> 
     
    </div>
);
}

export default Audio;