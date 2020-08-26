import React from 'react';
import PlaylistNavbar from '../Components/PlaylistNavbar';
import SearchPlaylist from '../functioning/SearchPlaylist';


function Playlist (){
    return(
        <div>
            <PlaylistNavbar/>
            <SearchPlaylist/>
        </div>
    );
};

export default Playlist;