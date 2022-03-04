import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import apis from "../api";

import styled from "styled-components";

import "react-table/react-table.css";

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

const Container = styled.div.attrs({
  className: "container",
})`
  height: 150px;
`;

const Title = styled.h1.attrs({
  className: "h1",
})`
  margin: auto auto;
  max-width: 500px;
`;

function ListAppointments(props) {
  const [appointments, setAppointments] = useState([]);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      await apis
        .getAppointments()
        .then((result) => {
          setAppointments(result.data.appointements);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  function DeleteAppointment(props) {
    const deleteAppointment = (event) => {
      event.preventDefault();

      if (
        window.confirm(
          `Do tou want to delete the appointment ${props.id} permanently?`
        )
      ) {
        apis.deleteAppointment(props.id);
        window.location.reload();
      }
    };
    return <Delete onClick={deleteAppointment}>Delete Appointment</Delete>;
  }

  const columns = [
    {
      Header: "Card Number",
      accessor: "cardNumber",
      filterable: false,
    },
    {
      Header: "Vaccine Site",
      accessor: "vaccineSite",
      filterable: false,
    },
    {
      Header: "Priority Area",
      accessor: "priorityArea",
      filterable: false,
    },
    {
      id: "date",
      Header: "Date/Time",
      accessor: (a) => a.dateTime.split("T")[0],
      filterable: false,
    },
    {
      id: "cancelled",
      Header: "Cancelled",
      accessor: (a) => a.cancelled.toString(),
      filterable: false,
    },
    {
      Header: "Delete Column",
      accessor: "",
      Cell: function (props) {
        return (
          <span>
            <DeleteAppointment id={props.original._id} />
          </span>
        );
      },
    },
  ];

  return (
    <Container>
      <Title>Vaccine Appointments</Title>
      <ReactTable
        data={appointments}
        columns={columns}
        loading={isLoading}
        defaultPageSize={10}
        showPageSizeOptions={false}
        minRows={0}
      />
    </Container>
  );
}

export default ListAppointments;
