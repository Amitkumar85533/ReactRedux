import { combineReducers } from 'redux';

 const songsReducer = () => {
    return [
        { title: 'Dj wale babu' , duration : '4:04' },
        { title: 'swag mera desi' , duration : '4:05' },
        { title: 'Koka' , duration : '4:06' },
        { title: 'Ladki pagel hai' , duration : '4:07' }
    ];
 };

 const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
 };

export default combineReducers({
     songs: songsReducer,
     selectedSong: selectedSongReducer
 });