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
      this.ListeningStateChangedEvent({ employees: data })
    }).then(async () => {
      this.ListeningStateChangedEvent({ employeesInfo: this.buildData(), isLoading: false })
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
          field: 'firstName',
          width: 150
        },
        {
          label: 'Last Name',
          field: 'lastName',
          width: 150
        },
        {
          label: 'Phone Number',
          field: 'phone',
          width: 150
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
        entries={25}
        hover
        data={data}
        />
      </section>
      </div>
    );
  }
}

export default TableContainer;