import randomSong from './helpers';
import { useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay } from '@fortawesome/free-solid-svg-icons';
import songs from './data/songs';

// const audios = ["all_samples/high/1.mp3", "all_samples/high/2.mp3", "all_samples/high/4.mp3",
// "all_samples/high/5.mp3", "all_samples/high/6.mp3", "all_samples/high/7.mp3", "all_samples/high/8.mp3",
// "all_samples/high/9.mp3", "all_samples/high/10.mp3", "all_samples/high/11.mp3", "all_samples/high/12.mp3",
//  "all_samples/high/13.mp3", "all_samples/high/14.mp3", "all_samples/high/15.mp3", "all_samples/high/16.mp3"]

function AudioRandomSongs ({style, title, typeMusic}) {
const [song, setSong] = useState(randomSong(songs));
const audioRef = useRef();  //ref a un objet audio
const playSong =() => {
    setSong(randomSong(songs)); 
    console.log(songs);
    if(audioRef.current){
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
        
    }
}




    return(
    <div>
        <button className={`${style} m-2 rounded`} type="button" onClick={playSong}>{title}
        <FontAwesomeIcon icon={faPlay}/> 
        </button>
        <audio  ref={audioRef}><source src={song[typeMusic]} type="audio/mpeg"/></audio>
        <p className="text-6xl">{song['label']}</p> 
    </div>

    )
}

export default AudioRandomSongs;
