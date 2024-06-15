import { useEffect, useState } from "react";
import Search from "./assets/img/search.svg";
import Hbar from "./assets/img/hbar.svg";
import axios from "axios";

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "coalition";
        const password = "skills-test";
        const auth = btoa(`${username}:${password}`);

        const config = {
          method: "get",
          url: "https://fedskillstest.coalitiontechnologies.workers.dev",
          headers: {
            Authorization: `Basic ${auth}`,
          },
        };

        const response = await axios(config);
        setPatients(response.data);
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!patients) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="one p-4 mt-2">
        <div className="container mt-5 mx-auto">
          <div className="card px-4">
            <div className="flex items-center justify-between">
              <h5 className="heading-text">Patients</h5>
              <img className="icon" src={Search} alt="search" />
            </div>
            <div className="py-6 space-y-4 mt-5">
              {patients.map((patient, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex justify-start items-center space-x-4">
                    <img
                      src={patient.profile_picture}
                      alt={`Profile of ${patient.name}`}
                      className="w-12 h-12"
                    />
                    <div className="">
                      <p className="card-text2">{patient.name}</p>
                      <p className="card-text1">
                        {patient.gender}, {patient.age}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <img className="icon" src={Hbar} alt="hbar" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientList;
