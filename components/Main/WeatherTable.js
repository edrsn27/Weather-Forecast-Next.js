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
    <Table className="hidden-phone">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp (F)</th>
          <th className="d-none d-lg-table-cell">Description</th>
          <th className="d-none d-lg-table-cell">Main</th>
          <th className="d-none d-lg-table-cell">Pressure</th>
          <th className="d-none d-lg-table-cell">Humidity</th>
        </tr>
      </thead>
      <tbody>
        {weather && (
          <tr>
            <td>{getFormattedDate(new Date())}</td>
            <td>{weather.main.temp}</td>
            <td className="d-none d-lg-table-cell">
              {weather.weather[0].description}
            </td>
            <td className="d-none d-lg-table-cell">
              {weather.weather[0].main}
            </td>
            <td className="d-none d-lg-table-cell">{weather.main.pressure}</td>
            <td className="d-none d-lg-table-cell">{weather.main.humidity}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
