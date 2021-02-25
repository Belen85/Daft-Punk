import randomSong from './helpers';
import { useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay } from '@fortawesome/free-solid-svg-icons';
import songs from './data/songs';

function AudioRandom3Songs ({title}) {
    const audioRef = useRef();
    let randomSong1 = '';
   const playSong = () => {
    //    randomSong1 = randomSong(songs)['audioHigh'];
       //console.log(randomSong1);
      
       //song.play();
      
       for (let i=0; i<3; i++)
       {
        let songsInArrow = '';
        let song = new Audio(randomSong(songs)['audioHigh']);
        //song.addEventListener('loadeddata', ()=> {let duration = song.duration; console.log(duration);})
        setTimeout(song.play(),song.addEventListener('loadeddata', ()=> {let duration = song.duration; console.log(duration);}) )
       }
   } 

        return(
        <button onClick={playSong}>{title}</button>
        )
    }
    
    export default AudioRandom3Songs;
    