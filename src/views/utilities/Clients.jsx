import * as React from 'react';
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// material-ui
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import { useNavigate } from "react-router-dom"
// project imports
import MainCard from 'ui-component/cards/MainCard';



export default function QuickFilteringGrid() {

  const VISIBLE_FIELDS = ['cname', 'sector', 'cperson', 'hrperson', 'updateClient', 'deleteClient'];
  const COLUMNS = [{
    field: 'cname',
    headerName: 'Company Name',
    width: 150,
    groupable: false
  }, {
    field: 'sector',
    headerName: 'Industry/Sector',
    width: 150,
    groupable: false
  }, {
    field: 'cperson',
    headerName: 'Contact Person',
    width: 150
  }, {
    field: 'hrperson',
    headerName: 'HR Contact',
    width: 150
  }, {
    field: "updateClient",
    headerName: "Update",
    sortable: false,
    width: 100,
    renderCell: () => {
      return (
        <IconButton onClick={()=>navToPage('/utils/util-clients-update')}>
          <EditIcon />
        </IconButton>
      );
    }
      
  },{
    field: "deleteClient",
    headerName: "Delete",
    sortable: false,
    width: 100,
    renderCell: () => {
      return (
        <IconButton onClick={() => confirm('Are you sure you want to delete this Client?')} >
          <DeleteIcon />
        </IconButton>
      )
    }
  }
  ];
  const ROWS = [
    
    {
      "id": "54",
      "cname": "O'Reilly - Herman",
      "sector": "Implementation",
      "cperson": "Adolfo Hegmann",
      "hrperson": "Zelma Macejkovic"
    },
    {
      "id": "80",
      "cname": "Fritsch - Nikolaus",
      "sector": "Operations",
      "cperson": "Theresia Wintheiser",
      "hrperson": "Kane Pollich"
    },
    {
      "id": "82",
      "cname": "Huel, Leannon and Bins",
      "sector": "Identity",
      "cperson": "Retha Koepp",
      "hrperson": "Sean Prosacco"
    },
    {
      "id": "15",
      "cname": "Torp, Kozey and Russel",
      "sector": "Identity",
      "cperson": "Yasmin Ratke-Luettgen",
      "hrperson": "Xavier Williamson"
    },
    {
      "id": "35",
      "cname": "Langworth and Sons",
      "sector": "Optimization",
      "cperson": "Nathaniel Fahey",
      "hrperson": "Mohammed Bahringer"
    },
    {
      "id": "37",
      "cname": "Steuber - McClure",
      "sector": "Integration",
      "cperson": "Brandi Macejkovic",
      "hrperson": "Alta O'Hara"
    },
    {
      "id": "4",
      "cname": "Koepp, Gottlieb and Feeney",
      "sector": "Program",
      "cperson": "Blaze Feil",
      "hrperson": "Alice Doyle"
    },
    {
      "id": "29",
      "cname": "Hamill - Ondricka",
      "sector": "Implementation",
      "cperson": "Eldora Mraz",
      "hrperson": "Russel Predovic"
    },
    {
      "id": "40",
      "cname": "Marks, Bernier and Olson",
      "sector": "Configuration",
      "cperson": "Summer Bartoletti",
      "hrperson": "Willa Keebler"
    },
    {
      "id": "40",
      "cname": "Cremin, Toy and Grant",
      "sector": "Research",
      "cperson": "Casper Mraz",
      "hrperson": "Lawrence Abshire"
    },
    {
      "id": "90",
      "cname": "Fritsch - Morar",
      "sector": "Infrastructure",
      "cperson": "Lucile Predovic",
      "hrperson": "Ola Klein-Bayer"
    },
    {
      "id": "55",
      "cname": "Maggio - Kling",
      "sector": "Quality",
      "cperson": "Krystina Rau",
      "hrperson": "Charley Nienow"
    },
    {
      "id": "97",
      "cname": "Marvin, Brown and Christiansen",
      "sector": "Group",
      "cperson": "Ola Denesik",
      "hrperson": "Clemens Thiel"
    },
    {
      "id": "15",
      "cname": "Becker - Powlowski",
      "sector": "Data",
      "cperson": "Maye Mosciski",
      "hrperson": "Bill Koss"
    },
    {
      "id": "92",
      "cname": "Jaskolski, Konopelski and Kovacek",
      "sector": "Paradigm",
      "cperson": "Adalberto Heidenreich-Reichel",
      "hrperson": "Cathryn Wunsch"
    },
    {
      "id": "89",
      "cname": "Mertz Group",
      "sector": "Operations",
      "cperson": "Helmer Gutmann",
      "hrperson": "Marlen Wyman"
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
      <MainCard title="Clients">
        <IconButton onClick={()=>navToPage('/utils/util-clients-new')}>
          <DomainAddIcon /> - Add Client
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
