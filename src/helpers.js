import songs from './data/songs';


// for (let i=0; i<=Object.keys(songs).length; i++)
// {  var keys = Object.keys(songs);
//     console.log(`${keys}`);
// }


function randomSong(object) {
    var keys = Object.keys(object);
    return object[keys[Math.floor(keys.length * Math.random())]];
  }

// function randomSong(items) {
//   return items[Math.floor(Math.random() * items.length)];
// }


const random1 = randomSong(songs);
console.log(random1);

export default randomSong;