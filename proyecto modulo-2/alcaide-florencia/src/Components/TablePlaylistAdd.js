import React from 'react';
import {
    Paper,
    Table,
    TableRow,
    TableHead,
    TableCell,
    TableBody,
  } from "@material-ui/core";
  import '../Styles/TablePlaylistAdd.css';


function TablePlaylistAdd(props){
    return(
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
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableBody>
            </Table>
            </Paper>
        </div>
        
    );

};

export default TablePlaylistAdd;