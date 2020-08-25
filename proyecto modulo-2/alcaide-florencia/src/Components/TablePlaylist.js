import React from "react";
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "../Styles/TablePlaylis.css";

function TablePlaylist(props) {
  return (
    <div>
      <div className="search-cont">
        <Box className="box-cont">
          <Paper variant="outlined" component="form">
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Buscar"
              onChange={props.handleInputChange}
              value={props.inputValue}
              onKeyPress={props.handleInputKeyPress}
            />
          </Paper>
        </Box>
      </div>
    </div>
  );
};
export default TablePlaylist;
