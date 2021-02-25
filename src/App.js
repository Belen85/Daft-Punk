import './App.css'; 
import Audio from './Audio';
import MainSong from './MainSong';
import AudioRandomSongs from './AudioRandomSongs';
import AudioRandom3Songs from './AudioRandom3Songs';
import songs from './data/songs';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {faCalendar, faCoffee, faPlay, play} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="h-full">
      <div className="flex flex-wrap justify-center mb-6">
        <h1 className="text-4xl">Daft-Punk</h1>
      </div>
    <div className="flex flex-wrap justify-around">
      {songs.map((song) => <Audio title={song.label} link={song.audioHigh} style="bg-red-300"/>)}
      </div>
      <div className="flex flex-wrap justify-around" >
      <MainSong link="all_samples/song-instrumental.mp3">
      </MainSong>
      </div>
      <div className="flex flex-wrap justify-around mb-6">
      {songs.map((song) => <Audio title={song.label} link={song.audioLow} style="bg-green-300"/>)}
      </div>
      <div className="flex flex-wrap justify-around" >
      <AudioRandomSongs title="Random High" typeMusic="audioHigh" style="bg-gray-300" /> 
      <AudioRandomSongs title="Random High" typeMusic="audioHigh" style="bg-gray-300" /> 
      </div>
    <div className="flex flex-wrap justify-center" >
    <iframe src="https://giphy.com/embed/3o6vXRURLVjU0fMQOA"  width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dance-dancing-3o6vXRURLVjU0fMQOA"></a></p>
    </div>
    </div>
  );
}

export default App;
