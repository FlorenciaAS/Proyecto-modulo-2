import React from "react";
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "../Styles/TablePlaylis.css";

function TablePlaylist() {
  return (
    <div>
      <div className="search-cont">
        <Box className="box-cont">
          <Paper variant="outlined" component="form">
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase placeholder="Buscar" />
          </Paper>
        </Box>
      </div>
      <div className='cont-table'>
        <Paper className='table-cont'>
        <h4>Resultados</h4>
          <Table  aria-label="simple table" variant='outlined'>
            <TableHead>
              <TableRow>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Artista</TableCell>
                <TableCell align="center">Álbum</TableCell>
                <TableCell align="center">Duracion</TableCell>
                <TableCell align="center">Agregar</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </Paper>
      </div>
    </div>
  );
}
export default TablePlaylist;
