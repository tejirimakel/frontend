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
      <div className="one p-4 overflow-hidden hover:overflow-y-auto max-h-[300px] lg:max-h-[1165px] w-full lg:w-max">
        <div className="bg-white absolute px-3 pb-4 pt-10 -mt-4">
          <div className="flex items-center justify-between">
            <h5 className="heading-text">Patients</h5>
            <img
              className="icon ml-60 md:ml-[35rem] lg:ml-32"
              src={Search}
              alt="search"
            />
          </div>
        </div>
        <div className="container mt-16 mx-auto">
          <div className="card px-4">
            <div className="py-6 space-y-4 mt-5">
              {patients.map((patient, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between hover:bg-gray-200 px-4 py-2 rounded-lg"
                >
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
