import React from 'react';
import {
    Paper,
    Table,
    TableRow,
    TableHead,
    TableCell,
  } from "@material-ui/core";
  import '../Styles/TablePlaylistAdd.css';


function TablePlaylistAdd(){
    return(
        <div className='cont-table-add'>
            <Paper className='table-cont-add' >
            <Table  aria-label="simple table"  variant='outlined'>
                <TableHead >
                <h4>Tu Playlist</h4>
                <TableRow>
                    <TableCell align="left" >Nombre</TableCell>
                    <TableCell align="left">Artista</TableCell>
                    <TableCell align="left">Duración</TableCell>
                    <TableCell align="left">Cant. Votos</TableCell>
                    <TableCell align="left">Votar</TableCell>
                </TableRow>
                </TableHead>
            </Table>
            </Paper>
        </div>
        
    );

};

export default TablePlaylistAdd;