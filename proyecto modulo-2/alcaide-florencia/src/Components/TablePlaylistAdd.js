import React from 'react';

function TablePlaylistAdd(){
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
          </Table>
        </Paper>
      </div>
    </div>

};

export default TablePlaylistAdd;