import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Container from "@material-ui/core/Container";

const columns = [
  {
    field: "id",
    headerName: "ID",
    description: "This column is for the id to keep count of your subscriptions.",
    sortable: false,
    width: 100,
    // valueGetter: (params) => `${params.getValue("id")}`,
  },
  {
    field: "name",
    headerName: "Name",
    description: "This column is for the name of your subscription.",
    sortable: false,
    width: 300,
    // valueGetter: (params) => `${params.getValue("name")}`,
  },
  {
    field: "price",
    headerName: "Price",
    description: "This column is for the price of your subscription.",
    sortable: false,
    width: 150,
    // valueGetter: (params) => `${params.getValue("price")}`,
  },
  {
    field: "expiration",
    headerName: "Expiration Date",
    description: "This column is for when your subscription expires.",
    sortable: false,
    width: 250,
    // valueGetter: (params) => `${params.getValue('expiration')}`,
  },
];

const rows = [
  { id: 1, name: 'Netflix', price: '$9.99', expiration: '2.21.2021' }
];

// const useStyles = makeStyles((theme) => ({
//   message: {
//     fontWeight: "bold",
//     color: "black",
//     textAlign: "center"
//   }
//   }));

export default function Subscription() {
  return (
    <Container maxWidth="md">
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={4}
          checkboxSelection
        />
      </div>
    </Container>
  );
}
