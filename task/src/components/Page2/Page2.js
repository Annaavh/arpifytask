import React, { useState } from "react";
import "./Page2.css";
import userApi from "../../api/api";

function Page2() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState();
  const [pdf, setPdf] = useState();

  const formData = new FormData();
  const formDataphoto = new FormData();
  const handlePdf = (e) => {
    setPdf(e.target?.files[0]);
    formData.append("pdf", e.target?.files[0], e.target?.files[0]?.name);
  };

  const handlePhoto = (e) => {
    setPhoto(e.target?.files[0]);
    formDataphoto.append("photo", e.target?.files[0], e.target?.files[0]?.name);
  };
  const data = {
    firstName,
    lastName,
    birthDay,
    gender,
    formData,
    formDataphoto,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendData();
  };
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  async function sendData() {
    userApi
      .post("/form", data, { headers: headers })
      .then((res) =>
        console.log(
          {
            message: "User created successfully",
            userFullName: data.firstName + " " + data.lastName,
          },
          res,
          "res"
        )
      )
      .catch((err) => console.log(err));
  }
  console.log(pdf);
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={(e) => handleSubmit(e)} className=" w-25 mt-5 form">
        <h3 className="text-center mb-4">Login</h3>
        <div className="form-group">
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="form-control mb-4"
            placeholder="Firstname"
          />
        </div>
        <div className="form-group">
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="form-control mb-4"
            placeholder="Lastname"
          />
        </div>
        <div className="form-group">
          <label>BirthDay</label>
          <input
            format={new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }).format(Date.now())}
            value={birthDay}
            onChange={(e) => setBirthDay(e.target.value)}
            type="date"
            className="form-control mb-4"
          />
        </div>
        <div className="form-check">
          <div>
            <input
              onChange={(e) => setGender(e.target.value)}
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="male"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Male
            </label>
          </div>
          <div>
            <input
              onChange={(e) => setGender(e.target.value)}
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="female"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Female
            </label>
          </div>
        </div>
        <div className="photo">
          <label>Photo pdf/jpeg</label>
          <input
            onChange={(e) => handlePhoto(e)}
            type="file"
            accept="jpeg,png"
          />
        </div>

        <div className="pdf">
          <label>Pdf File</label>
          <input onChange={(e) => handlePdf(e)} type="file" />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Page2;
