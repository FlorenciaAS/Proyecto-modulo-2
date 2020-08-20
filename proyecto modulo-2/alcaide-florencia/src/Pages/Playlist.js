import React from 'react';
import PlaylistNavbar from '../Components/PlaylistNavbar';
import TablePlaylist from '../Components/TablePlaylist';


function Playlist (){
    return(
        <div>
            <PlaylistNavbar/>
            <TablePlaylist/>
        </div>
    );
};

export default Playlist;