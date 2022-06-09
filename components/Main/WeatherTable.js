import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "../../context/WeatherProvider";
export default function WeatherTable() {
  const { weather } = useQuery();
  console.log(weather);

  function getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return month + "/" + day + "/" + year;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp (F)</th>
          <th>Description</th>
          <th>Main</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
        {weather && (
          <tr>
            <td>{getFormattedDate(new Date())}</td>
            <td>{weather.main.temp}</td>
            <td>{weather.weather[0].description}</td>
            <td>{weather.weather[0].main}</td>
            <td>{weather.main.pressure}</td>
            <td>{weather.main.humidity}</td>
         
          </tr>
        )}
      </tbody>
    </Table>
  );
}
