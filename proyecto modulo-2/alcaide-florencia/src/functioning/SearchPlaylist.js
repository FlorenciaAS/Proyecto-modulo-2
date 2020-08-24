import React, { useState } from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import '../Styles/searchPlaylist.css';
import songData from "../baseDeDatos/songData.json";
import TablePlaylist from "../Components/TablePlaylist";

const SearchPlaylist = () => {
  const [inputValue, setInputValue] = useState("");
  const [tableFilter, setTableFilter] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const filterSong = (song) => {
    if (song.name.includes(inputValue)) {
      return true;
    } else {
      return false;
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      const results = songData.filter(filterSong);

      setTableFilter(results);
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
            <Table aria-label="simple table" variant="outlined">
              <TableHead>
                <h4>Resultados</h4>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell align="center">Artista</TableCell>
                  <TableCell align="center">Álbum</TableCell>
                  <TableCell align="center">Duración</TableCell>
                  <TableCell align="center">Agregar</TableCell>
                </TableRow>
              </TableHead>
          
              {
              tableFilter.map((song) => (
              <TableBody >
              <TableRow key={song.uuid}>
                <TableCell>{song.name}</TableCell>
                <TableCell align="center">{song.artist.name}</TableCell>
                <TableCell align="center">{song.album}</TableCell>
                <TableCell align="center">{song.duration}</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableBody>
              ))
            }
            </Table>
          </Paper>
        </div>
      </div>
  );
};
export default SearchPlaylist;
