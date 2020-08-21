import React from "react";
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
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
        <Paper className='table-cont' >
          <Table aria-label="simple table"  variant='outlined'>
            <TableHead >
            <h4>Resultados</h4>
              <TableRow>
                <TableCell >Nombre</TableCell>
                <TableCell align="center">Artista</TableCell>
                <TableCell align="center">Álbum</TableCell>
                <TableCell align="center">Duración</TableCell>
                <TableCell align="center">Agregar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell >fevdev</TableCell>
                <TableCell align='center'>veveve</TableCell>
                <TableCell align='center'>sdfesf</TableCell>
                <TableCell align='center'>feffef</TableCell>
                <TableCell align='center'>fefefefe</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>

    </div>
  );
}
export default TablePlaylist;
