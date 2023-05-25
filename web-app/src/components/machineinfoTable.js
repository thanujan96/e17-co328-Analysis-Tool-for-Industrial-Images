// import * as React from "react";
// import PropTypes from "prop-types";
// import { alpha } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import TableSortLabel from "@mui/material/TableSortLabel";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import Checkbox from "@mui/material/Checkbox";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from "@mui/material/Switch";
// import DeleteIcon from "@mui/icons-material/Delete";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import { visuallyHidden } from "@mui/utils";

// // function createData(name, calories, fat, carbs, protein) {
// //   return {
// //     name,
// //     calories,
// //     fat,
// //     carbs,
// //     protein,
// //   };
// // }

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// // This method is created for cross-browser compatibility, if you don't
// // need to support IE11, you can use Array.prototype.sort() directly
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   {
//     id: "monanumber",
//     numeric: false,
//     disablePadding: false,
//     label: "Mona Number",
//   },
//   {
//     id: "moldseries",
//     numeric: false,
//     disablePadding: false,
//     label: "Mold Serial",
//   },
//   {
//     id: "moldmaker",
//     numeric: false,
//     disablePadding: false,
//     label: "Mold Maker",
//   },
//   {
//     id: "moldmaterial",
//     numeric: false,
//     disablePadding: false,
//     label: "Mold Material",
//   },
//   {
//     id: "hourrate",
//     numeric: false,
//     disablePadding: false,
//     label: "Hour Rate",
//   },
//   {
//     id: "moldshots",
//     numeric: false,
//     disablePadding: false,
//     label: "Mold Shots",
//   },
//   {
//     id: "failedshots",
//     numeric: false,
//     disablePadding: false,
//     label: "Failed Shots",
//   },
//   {
//     id: "startdate",
//     numeric: false,
//     disablePadding: false,
//     label: "Start Date",
//   },
//   {
//     id: "enddate",
//     numeric: false,
//     disablePadding: false,
//     label: "End Date",
//   },
// ];

// function EnhancedTableHead(props) {
//   const {
//     onSelectAllClick,
//     order,
//     orderBy,
//     numSelected,
//     rowCount,
//     onRequestSort,
//   } = props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               "aria-label": "select all desserts",
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? "right" : "left"}
//             padding={headCell.disablePadding ? "none" : "normal"}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : "asc"}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === "desc" ? "sorted descending" : "sorted ascending"}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(["asc", "desc"]).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// function EnhancedTableToolbar(props) {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(
//               theme.palette.primary.main,
//               theme.palette.action.activatedOpacity
//             ),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Machine {props.machineId}
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   machineId: PropTypes.number.isRequired,
// };

// var machineNewData = [];
// var moldMake = ["ALEX", "TET", "TONY", "MONA"];
// var moldMat = ["HIPS", "ABS", "ABS-CLEAR", "SAN"];
// for (let index = 0; index < 60; index++) {
//   machineNewData.push({ machineID: (index % 60).toString(), rows: [] });
// }
// const page = 2;
// for (let index = 0; index < 60; index++) {
//   machineNewData.forEach((value) => {
//     if (value.machineID == page.toString()) {
//       value.rows.push({
//         monaNumber: "#132" + index.toString(),
//         moldSerial: "QXO43" + index.toString(),
//         moldShots: 12 + index,
//         failedShots: 2 + (index % 5),
//         prodRate: 12 + index,
//         material: moldMat[index % 4],
//         moldMaker: moldMake[index % 4],
//         startDate: "05/06/2017",
//         endDate: "09/06/2017",
//       });
//     }
//   });
// }
// console.log(machineNewData);
// export function MachineInfoTable(props) {
//   // const {
//   //   machineId,
//   //   monaNumber,
//   //   moldSerial,
//   //   moldMaker,
//   //   material,
//   //   status,
//   //   moldShots,
//   //   failedShots,
//   //   prodRate,
//   //   prod_startDate,
//   //   prod_startTime,
//   //   prod_endDate,
//   //   prod_endTime,
//   //   ...others
//   // } = props;
//   console.log(props);
//   const [order, setOrder] = React.useState("asc");
//   const [orderBy, setOrderBy] = React.useState("calories");
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(8);

//   const rows = machineNewData[2].rows;

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelected = rows.map((n) => n.name);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (name) => selected.indexOf(name) !== -1;

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
//   console.log(rows.length);
//   return (
//     <Box sx={{ width: "100%", marginLeft: "20px", marginRight: "20px" }}>
//       <Paper sx={{ width: "100%", mb: 2 }}>
//         <EnhancedTableToolbar
//           numSelected={selected.length}
//           machineId={props.machineId}
//         />
//         <TableContainer>
//           <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={dense ? "small" : "medium"}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {/* if you don't need to support IE11, you can replace the `stableSort` call with:
//                  rows.sort(getComparator(order, orderBy)).slice() */}
//               {stableSort(rows, getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
//                   const isItemSelected = isSelected(row.name);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       onClick={(event) => handleClick(event, row.name)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.name}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           color="primary"
//                           checked={isItemSelected}
//                           inputProps={{
//                             "aria-labelledby": labelId,
//                           }}
//                         />
//                       </TableCell>
//                       <TableCell
//                         component="th"
//                         id={labelId}
//                         scope="row"
//                         padding="none"
//                       >
//                         {row.monaNumber}
//                       </TableCell>
//                       <TableCell align="left">{row.moldSerial}</TableCell>
//                       <TableCell align="left">{row.moldMaker}</TableCell>
//                       <TableCell align="left">{row.material}</TableCell>
//                       <TableCell align="left">{row.prodRate}</TableCell>
//                       <TableCell align="left">{row.moldShots}</TableCell>
//                       <TableCell align="left">{row.failedShots}</TableCell>
//                       <TableCell align="left">{row.startDate}</TableCell>
//                       <TableCell align="left">{row.endDate}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: (dense ? 33 : 53) * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[8, 12, 16, 20, 24, 28, 32]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </Box>
//   );
// }

import * as React from "react";
import { useMemo } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { DataGrid } from "@mui/x-data-grid";
// function createData(name, calories, fat, carbs, protein) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   };
// }

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// // This method is created for cross-browser compatibility, if you don't
// // need to support IE11, you can use Array.prototype.sort() directly
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const headCells = null;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Machine {props.machineId}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  machineId: PropTypes.number.isRequired,
};

var machineNewData = [];
var moldMake = ["ALEX", "TET", "TONY", "MONA"];
var moldMat = ["HIPS", "ABS", "ABS-CLEAR", "SAN"];
for (let index = 0; index < 60; index++) {
  machineNewData.push({ machineID: (index % 60).toString(), rows: [] });
}
const page = 2;
for (let index = 0; index < 60; index++) {
  machineNewData.forEach((value) => {
    if (value.machineID == page.toString()) {
      value.rows.push({
        _id: index,
        monaNumber: "#132" + index.toString(),
        moldSerial: "QXO43" + index.toString(),
        moldShots: 12 + index,
        failedShots: 2 + (index % 5),
        prodRate: 12 + index,
        material: moldMat[index % 4],
        moldMaker: moldMake[index % 4],
        startDate: "05/06/2017",
        endDate: "09/06/2017",
      });
    }
  });
}
// console.log(machineNewData);
export function MachineInfoTable(props) {
  const columns = useMemo(
    () => [
      {
        field: "monaNumber",
        flex: 15,
        headerName: "Mona Number",
      },
      {
        field: "moldSerial",
        flex: 15,
        headerName: "Mold Serial",
      },
      {
        field: "moldMaker",
        flex: 15,
        headerName: "Mold Maker",
      },
      {
        field: "material",
        flex: 15,

        headerName: "Mold Material",
      },
      {
        field: "prodRate",
        flex: 12,

        headerName: "Hour Rate",
      },
      {
        field: "moldShots",
        flex: 12,

        headerName: "Mold Shots",
      },
      {
        field: "startDate",
        flex: 12,

        headerName: "Start Date",
      },
      {
        field: "endDate",
        flex: 12,

        headerName: "End Date",
      },
      {
        field: "id",
        flex: 12,

        headerName: "ID",
      },
    ],
    []
  );
  // const {
  //   machineId,
  //   monaNumber,
  //   moldSerial,
  //   moldMaker,
  //   material,
  //   status,
  //   moldShots,
  //   failedShots,
  //   prodRate,
  //   prod_startDate,
  //   prod_startTime,
  //   prod_endDate,
  //   prod_endTime,
  //   ...others
  // } = props;
  console.log(props);
  // const [order, setOrder] = React.useState("asc");
  // const [orderBy, setOrderBy] = React.useState("calories");
  // const [selected, setSelected] = React.useState([]);
  // const [page, setPage] = React.useState(0);
  // const [dense, setDense] = React.useState(false);
  // const [rowsPerPage, setRowsPerPage] = React.useState(8);
  var machineNewData = [];
  var moldMake = ["ALEX", "TET", "TONY", "MONA"];
  var moldMat = ["HIPS", "ABS", "ABS-CLEAR", "SAN"];
  for (let index = 0; index < 60; index++) {
    machineNewData.push({ machineID: (index % 60).toString(), rows: [] });
  }

  for (let index = 0; index < 60; index++) {
    machineNewData.forEach((value) => {
      if (value.machineID == page.toString()) {
        value.rows.push({
          monaNumber: "#132" + index.toString(),
          moldSerial: "QXO43" + index.toString(),
          moldShots: 12 + index,
          failedShots: 2 + (index % 5),
          prodRate: 12 + index,
          material: moldMat[index % 4],
          moldMaker: moldMake[index % 4],
          startDate: "05/06/2017",
          endDate: "09/06/2017",
          id: index,
        });
      }
    });
  }
  const rows = machineNewData[2].rows;

  // const handlmachineNewDataeRequestSort = (event, property) => {
  //   const isAsc = orderBy === property && order === "asc";
  //   setOrder(isAsc ? "desc" : "asc");
  //   setOrderBy(property);
  // };

  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelected = rows.map((n) => n.name);
  //     setSelected(newSelected);
  //     return;
  //   }
  //   setSelected([]);
  // };

  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelected(newSelected);
  // };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  // const isSelected = (name) => selected.indexOf(name) !== -1;

  // // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  // console.log(rows.length);
  // console.log(rows);
  // console.log("rows");

  return (
    <Box
      sx={{
        width: 1,
        height: "100%",
        marginLeft: "100px",
        marginRight: "20px",
      }}
    >
      <DataGrid
        autoHeight
        columns={columns}
        rows={rows}
        pageSize={10}
        rowsPerPageOptions={[12]}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      />
      {console.log(columns)}
      <Paper sx={{ width: "100%", mb: 2 }}></Paper>
    </Box>
  );
}
