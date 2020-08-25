import React, { useState } from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Paper,
  Avatar,
} from "@material-ui/core";
import '../Styles/searchPlaylist.css';
import songData from "../baseDeDatos/songData.json";
import TablePlaylist from "../Components/TablePlaylist";
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

const SearchPlaylist = () => {
  const [inputValue, setInputValue] = useState("");
  const [tableFilter, setTableFilter] = useState([]);

 

  const filterSong = (song) => {
    if (song.name.includes(inputValue)) {
      return true;
    } else {
      return false;
    }
  };

  const handleInputChange = (e) => {    
    setInputValue(e.target.value);
    
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      const result = songData.filter(filterSong);
      
      setTableFilter(result);
    }
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
                <TableCell>{song.name}</TableCell>
                <TableCell align="left">{song.artist.name}</TableCell>
                <TableCell align="left">{song.album}</TableCell>
                <TableCell align="left">{song.duration}</TableCell>
                <TableCell align="left"><AddCircleRoundedIcon color='secondary'/></TableCell>
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
