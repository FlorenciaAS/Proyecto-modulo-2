import React, { useState } from 'react';
import songData from '../baseDeDatos/songData.json';
import TablePlaylist from '../Components/TablePlaylist'

const SearchPlaylist = () => {
    const [inputValue, setInputValue] = useState('');
    



    return(
        <TablePlaylist/>
    );

};

export default SearchPlaylist;