import * as React from "react";

function createData( tags, status, coins, from, to, date) {
  return { tags, status, coins, from, to, date };
}

const rows = [
  createData("Study", "success", 20, "11:00", "11:23", "16/10/2024"),
  createData("Study", "success", 20, "11:00", "11:23", "16/10/2024"),
  createData("Games", "failure", 0, "11:00", "11:23", "16/10/2024"),
  createData("Movies", "success", 15, "11:00", "11:23", "16/10/2024"),
  createData("Reading", "success", 30, "11:00", "11:23", "16/10/2024"),
  createData("Research", "failure", 0, "11:00", "11:23", "16/10/2024"),
];

export default function Activity() {
  return (
    <>
      <h4 className="border-bottom text-center p-3 fw-semibold" style={{color: "#85ce14"}}>Recent Activity</h4>
      <div style={{maxHeight: "230px", overflowY: "auto", fontSize: "0.8rem"}}>
      <table className="table text-muted text-center">
        <thead>
          <tr>
            <th scope="col">Tags</th>
            <th scope="col">Status</th>
            <th scope="col">Coins Earned</th>
            <th scope="col">from:</th>
            <th scope="col">to:</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="text-muted">
              <td scope="row">{row.tags}</td>
              <td>
                <button className={`border ${row.status === 'success' ? 'successStatus' : 'failureStatus'}`}>{row.status}</button>
              </td>
              <td>{row.coins}</td>
              <td>{row.from}</td>
              <td>{row.to}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}
