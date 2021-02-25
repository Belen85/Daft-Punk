import { useRef, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStop} from '@fortawesome/free-solid-svg-icons';


function MainSong({title, link, style}) {
const [isplaying, setIsplaying] = useState(false);
const [ispaused, setIspaused] = useState(true);
const audioRef = useRef();

const playSong =() => {
    audioRef.current.play();
    setIsplaying(true);
    setIspaused(false);
    console.log(audioRef.current.duration);
};

const pauseSong = () => {
    if (isplaying===true)
    {
        audioRef.current.pause();
        setIsplaying(false);
        setIspaused(true);
    }
}

const stopSong = () => {
    if (isplaying===true | ispaused===true )
    {
        audioRef.current.load();
        setIsplaying(false);
        setIspaused(true);
    }
}

return(
    <div>
        <button className={`${style} m-2 rounded`} type="button" onClick={playSong} status={isplaying}>{title}
        <FontAwesomeIcon icon={faPlay}/> 
        </button>
        <button className={`${style} m-2 rounded`} type="button" onClick={pauseSong} status={ispaused}>{title}
        <FontAwesomeIcon icon={faPause}/> 
        </button>
        <button className={`${style} m-2 rounded`} type="button" onClick={stopSong} status={setIsplaying}>{title}
        <FontAwesomeIcon icon={faStop}/> 
        </button>
        <audio ref={audioRef}><source src={link} type="audio/mpeg"/></audio> 
     
    </div>
);
}

export default MainSong;