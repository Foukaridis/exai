import * as React from 'react';
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// material-ui
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from "react-router-dom"
// project imports
import MainCard from 'ui-component/cards/MainCard';



export default function QuickFilteringGrid() {


  const VISIBLE_FIELDS = ['name', 'surname', 'email', 'role', 'status','updateUser', 'deleteUser'];
  const COLUMNS = [{
    field: 'name',
    headerName: 'Name',
    width: 100,
    groupable: false
  }, {
    field: 'surname',
    headerName: 'Surname',
    width: 100,
    groupable: false
  }, {
    field: 'email',
    headerName: 'Email',
    width: 150
  }, {
    field: 'role',
    headerName: 'Role',
    width: 100
  }, {
    field: 'status',
    headerName: 'Status',
    width: 100
  }, {
    field: "updateUser",
    headerName: "Update",
    sortable: false,
    width: 100,
    renderCell: () => {
      return (
        <IconButton onClick={()=>navToPage('/utils/util-users-update')}>
          <EditIcon />
        </IconButton>
      );
    }
      
  },{
    field: "deleteUser",
    headerName: "Delete",
    sortable: false,
    width: 100,
    renderCell: () => {
      return (
        <IconButton onClick={() => confirm('Are you sure you want to delete this User?')} >
          <DeleteIcon />
        </IconButton>
      )
    }
  }
  ];
  const ROWS = [
    
    {
      "id": "6",
      "name": "Elyse",
      "surname": "Beer",
      "email": "Gwen82@gmail.com",
      "role": "HR Executive",
      "status": "Deleted"
    },
    {
      "id": "50",
      "name": "Faye",
      "surname": "Bartell",
      "email": "Christine34@gmail.com",
      "role": "HR Manager",
      "status": "Active"
    },
    {
      "id": "52",
      "name": "Arch",
      "surname": "Kozey",
      "email": "Tomas_Ondricka@gmail.com",
      "role": "System User",
      "status": "Active"
    },
    {
      "id": "27",
      "name": "Evans",
      "surname": "Welch",
      "email": "Stewart.Kuhlman72@gmail.com",
      "role": "System Manager",
      "status": "Active"
    },
    {
      "id": "38",
      "name": "Bridget",
      "surname": "Harris",
      "email": "Adam28@gmail.com",
      "role": "Client Manager",
      "status": "Active"
    },
    {
      "id": "11",
      "name": "Daija",
      "surname": "Koch-Wunsch",
      "email": "Zakary36@gmail.com",
      "role": "System User",
      "status": "Deleted"
    },
    {
      "id": "48",
      "name": "Tommie",
      "surname": "Wehner",
      "email": "Melissa_Cartwright@gmail.com",
      "role": "Client Manager",
      "status": "Active"
    },
    {
      "id": "21",
      "name": "Florine",
      "surname": "Ullrich",
      "email": "Fabiola.Windler96@gmail.com",
      "role": "HR Executive",
      "status": "Active"
    },
    {
      "id": "16",
      "name": "Kenyon",
      "surname": "Schroeder",
      "email": "Jeanette.Watsica6@gmail.com",
      "role": "Client Manager",
      "status": "Active"
    },
    {
      "id": "38",
      "name": "Avery",
      "surname": "Rohan",
      "email": "Andrew_Williamson46@gmail.com",
      "role": "Client Manager",
      "status": "Active"
    },
    {
      "id": "65",
      "name": "Amya",
      "surname": "Lehner",
      "email": "Lonnie56@gmail.com",
      "role": "Client User",
      "status": "Active"
    },
    {
      "id": "67",
      "name": "Marcos",
      "surname": "Goodwin",
      "email": "Arvid_West@gmail.com",
      "role": "HR Executive",
      "status": "Active"
    },
    {
      "id": "76",
      "name": "Nathen",
      "surname": "Sawayn",
      "email": "Anika49@gmail.com",
      "role": "HR Administrator",
      "status": "Active"
    },
    {
      "id": "42",
      "name": "Lonie",
      "surname": "Rice",
      "email": "Giovanni60@gmail.com",
      "role": "System Admin",
      "status": "Active"
    },
    {
      "id": "15",
      "name": "Ashly",
      "surname": "Leuschke-Goodwin",
      "email": "Napoleon7@gmail.com",
      "role": "Registered Psychologist/Psychometrist",
      "status": "Deleted"
    },
    {
      "id": "86",
      "name": "Kara",
      "surname": "Legros",
      "email": "Arielle37@gmail.com",
      "role": "System Admin",
      "status": "Deleted"
    }
  ];
  const navigate = useNavigate();

  const navToPage=(url)=>{
      navigate(url)
  }
  const data = {
    rows: ROWS,
    columns: COLUMNS
  }; 
  // Handle the displaying of the modal based on type and id

  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = React.useMemo(
    () => data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
    [data.columns],
  );

  return (
    <Box sx={{ height: 400, width: 1 }}>
      <MainCard title="Users">
        <IconButton onClick={()=>navToPage('/utils/util-users-new')}>
          <PersonAddIcon /> - Add User
        </IconButton>
      <DataGrid
        
        {...data}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
      </MainCard>
      
    </Box>
  );
}
