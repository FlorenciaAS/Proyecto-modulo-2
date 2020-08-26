import React, { useState } from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Paper,
  Avatar,
  IconButton,
} from "@material-ui/core";
import '../Styles/searchPlaylist.css';
import songData from "../baseDeDatos/songData.json";
import TablePlaylist from "../Components/TablePlaylist";
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

const SearchPlaylist = () => {
  const [inputValue, setInputValue] = useState('');
  const [tableFilter, setTableFilter] = useState([]);
  const [myPlaylist, setMyPlaylist]= useState([]);

  const handleInputChange = (e) => {    
    setInputValue(e.target.value);
    
  };


  const filterSong = (song) => {
    if (song.name.includes(inputValue)) {
      return true;
    } else {
      return false;
    };
  };

 

  const handleInputKeyPress = (e) => {
    
    if (e.key === 'Enter') {
      e.preventDefault();
      const result = songData.filter(filterSong);
      
      setTableFilter(result);
    }
  };

  const handleAgregarClick =(e, song) =>{
    console.log('Se ejecuta el handleAgregarClick')
    setMyPlaylist([...myPlaylist, song]);
  };


  return (
    <div>
      <TablePlaylist
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        handleInputKeyPress={handleInputKeyPress}
      />

      <div className="cont-table">
          <Paper className="table-cont">
             <h4>Resultados</h4>
            <Table aria-label="simple table" variant="outlined">
              <TableHead>
               
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell align="left">Artista</TableCell>
                  <TableCell align="left">Álbum</TableCell>
                  <TableCell align="left">Duración</TableCell>
                  <TableCell align="left">Agregar</TableCell>
                </TableRow>
              </TableHead>
          
             
              <TableBody >
              {
              tableFilter.map((song) => ( 
              <TableRow key={song.uuid}>
                <TableCell><Avatar src={song.artist.coverUrl}/> 
                {song.name}</TableCell>
                <TableCell align="left">{song.artist.name}</TableCell>
                <TableCell align="left">{song.album}</TableCell>
                <TableCell align="left">{song.duration}</TableCell>
                <TableCell align="left"><IconButton><AddCircleRoundedIcon
                 onClick={(e) => handleAgregarClick(e, song)}
                  color='secondary'/></IconButton> </TableCell>
              </TableRow>
                 ))}
            </TableBody>
           
            </Table>
          </Paper>
          
        </div>

        <div className='cont-table-add'>
            <Paper className='table-cont-add' >
            <h4>Tu Playlist</h4>
            <Table  aria-label="simple table"  variant='outlined'>
                <TableHead >
             
                <TableRow>
                  
                
                    <TableCell align="left" >Nombre</TableCell>
                    <TableCell align="left">Artista</TableCell>
                    <TableCell align="left">Duración</TableCell>
                    <TableCell align="left">Cant. Votos</TableCell>
                    <TableCell align="left">Votar</TableCell>
                </TableRow>
                </TableHead>

                <TableBody >
              {
              myPlaylist.map((song) => (
              <TableRow >
                <TableCell>{song.name}</TableCell>
                <TableCell align="left">{song.artist}</TableCell>
                <TableCell align="left">{song.duration}</TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
              ))
              }
            </TableBody>
            </Table>
            </Paper>
        </div>

        
      </div>
  );
};
export default SearchPlaylist;
