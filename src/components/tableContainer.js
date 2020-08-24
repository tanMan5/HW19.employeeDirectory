import React from "react";
import Jumbotron from "./Jumbotron";
import getEmployees from "../utils/API";
import { MDBDataTable } from 'mdbreact';


class TableContainer extends React.Component {
  state = {
    employees: [],
    employeesInfo: []
  };

  componentDidMount() {
    this.loadEmployees();
  }


loadEmployees = () => [
  getEmployees()
    .then(response => response.data.results)
    .then(data => {
      this.setState({ employees: data })
    }).then(async () => {
      this.setState({ employeesInfo: this.buildData(), isLoading: false })
    }).catch((err) => {
      console.log(err);
    })
  ];

  buildData = () => {
    let employees = this.state.employees.map((employee) => {
      return (
        {
          employeePicture: <img
          src={employee.picture.medium}
          alt='employee'
          />,
          first: employee.name.first,
          last: employee.name.last,
          phoneNumber: employee.phone,
          email: employee.email
        }
      )
    });
    return employees;
  }

render() {
    const data = {
      columns: [
        {
          label: 'Employee Picture',
          field: 'employeePicture',
          width: 150
        },
        {
          label: 'First Name',
          field: 'first',
          width: 250
        },
        {
          label: 'Last Name',
          field: 'last',
          width: 150
        },
        {
          label: 'Phone Number',
          field: 'phoneNumber',
          width: 300
        },
        {
          label: 'Email',
          field: 'email',
          width: 150
        }

      ],
      rows: this.state.employeesInfo
    };

    return (
      <div>
      <Jumbotron />
      <section className="container">
        <MDBDataTable
        entries={10}
        hover
        data={data}
        />
      </section>
      </div>
    );
  }
}

export default TableContainer;