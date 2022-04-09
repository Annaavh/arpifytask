import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userApi from "../../api/api";
import "./Page1.css";

function Page1() {
  let name = "Anna";
  let surName = "Avetisyan";
  const [data, setData] = useState("");
  useEffect(() => {
    foo();
  }, []);
  async function foo() {
    userApi
      .post("/init", {
        firstName: name,
        lastName: surName,
        birthDay: "2000-08-23",
        gender: "female",
      })
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(data);

  return (
    <div>
  <button className="btn-login" ><Link to="/login">Login</Link></button>
      <table className="table mt-2 text-center">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>BirthDay</th>
            <th>Gender</th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className={
                    (item.firstName == name && item.lastName == surName)
                      ? "my-account"
                      : "account"
                  }
                >
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.birthDay}</td>
                  <td>{item.gender}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Page1;
