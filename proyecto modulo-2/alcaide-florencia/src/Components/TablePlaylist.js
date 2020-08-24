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
              name="song"
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
