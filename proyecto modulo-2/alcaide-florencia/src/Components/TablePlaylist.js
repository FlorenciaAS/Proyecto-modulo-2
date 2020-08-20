import React from "react";
import { Box, IconButton, InputBase, Paper } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

function TablePlaylist() {
  return (
    <div>
      <Box>
        <Paper component="form">
          <IconButton
            type="submit"
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Buscar"
          />
        </Paper>
      </Box>
    </div>
  );
}
export default TablePlaylist;
