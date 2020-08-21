import React from 'react';
import PlaylistNavbar from '../Components/PlaylistNavbar';
import SearchPlaylist from '../functioning/SearchPlaylist';
import TablePlaylistAdd from '../Components/TablePlaylistAdd';


function Playlist (){
    return(
        <div>
            <PlaylistNavbar/>
            <SearchPlaylist/>
            <TablePlaylistAdd/>
        </div>
    );
};

export default Playlist;