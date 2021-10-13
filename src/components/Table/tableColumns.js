import { format } from 'date-fns'

export const tableColumns = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Start Date",
    accessor: "startDate",
    Cell: ({value}) => {return format(new Date(value), 'yyyy-MM-dd')}
  },
  {
    Header: "Date of Birth",
    accessor: "dateOfBirth",
    Cell: ({value}) => {return format(new Date(value), 'yyyy-MM-dd')}
  },
  {
    Header: "Department",
    accessor: "street",
  },
  {
    Header: "Street",
    accessor: "city",
  },
  {
    Header: "City",
    accessor: "state",
  },
  {
    Header: "State",
    accessor: "zipCode",
  },
  {
    Header: "Zip Code",
    accessor: "departement",
  },
];
