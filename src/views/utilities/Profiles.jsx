import * as React from 'react';
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// material-ui
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import QuizIcon from '@mui/icons-material/Quiz';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router-dom"
// project imports
import MainCard from 'ui-component/cards/MainCard';



export default function QuickFilteringGrid() {

  const VISIBLE_FIELDS = ['client', 'division', 'department', 'job', 'updateProfile', 'deleteProfile', 'approveProfile', 'actions'];
  const COLUMNS = [{
    field: 'client',
    headerName: 'Client',
    width: 150,
    groupable: false
  }, {
    field: 'division',
    headerName: 'Division',
    width: 150,
    groupable: false
  }, {
    field: 'department',
    headerName: 'Department',
    width: 150
  }, {
    field: 'job',
    headerName: 'Job Title',
    width: 150
  }, {
    field: 'status',
    headerName: 'Status',
    width: 150
  },{
    field: "actions",
    headerName: "Actions",
    sortable: false,
    width: 250,
    renderCell: () => {
      return (
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <IconButton onClick={()=>navToPage('/utils/util-profiles-update')}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => confirm('Are you sure you want to delete this Profile?')} >
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={()=>navToPage('/utils/util-profiles-update')}>
            <ThumbUpIcon />
          </IconButton>
          <IconButton onClick={()=>navToPage('/utils/util-profiles-update')}>
          <QuizIcon />
        </IconButton>
        </ButtonGroup>
      );
    }
      
  }
  
  ];
  const ROWS = [
    
    {
      "id": "22",
      "client": "Brekke, Feest and Tillman",
      "division": "Configuration",
      "department": "Intranet",
      "job": "Corporate Group Developer",
      "status": "Awaiting Approval"
    },
    {
      "id": "89",
      "client": "Rosenbaum - Tromp",
      "division": "Accountability",
      "department": "Optimization",
      "job": "District Directives Strategist",
      "status": "Finalised"
    },
    {
      "id": "28",
      "client": "Orn, Klocko and Ankunding",
      "division": "Integration",
      "department": "Applications",
      "job": "Future Creative Producer",
      "status": "Awaiting Review"
    },
    {
      "id": "87",
      "client": "Rolfson, Gulgowski and Corkery",
      "division": "Program",
      "department": "Functionality",
      "job": "International Intranet Planner",
      "status": "Awaiting Approval"
    },
    {
      "id": "42",
      "client": "Littel, Hauck and Senger",
      "division": "Accountability",
      "department": "Solutions",
      "job": "Principal Metrics Designer",
      "status": "Awaiting Review"
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
      <MainCard title="Job Profiles">
        <IconButton onClick={()=>navToPage('/utils/util-profiles-new')}>
          <QueuePlayNextIcon /> - Add Job Profile
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
