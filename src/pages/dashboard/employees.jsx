import { React, useEffect, useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(
      "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/alejandro_cruz"
    )
      .then((res) => res.json())
      .then((res) =>
        setEmployees(() => {
          return res.data.employees;
        })
      );
  }, []);

  function time() {
    let unixTimestamp = 0;
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleString();

    return humanDateFormat;
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <Typography className="p-6 text-center text-xl text-black sm:text-3xl">
          Employees Table
        </Typography>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Name", "Last name", "Birthday"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            {
              <tbody>
                {employees.map(({ name, last_name, birthday }, key) => {
                  const className = `py-3 px-5 ${
                    key === employees.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;
                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {last_name}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {time(birthday)}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            }
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default Employees;
