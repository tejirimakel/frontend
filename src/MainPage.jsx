import { useEffect, useState } from "react";
import PatientData from "./PatientData";
import PatientList from "./PatientList";
import History from "./History";
import axios from "axios";
import Dload from "./assets/img/dload.svg";

const Main = () => {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "coalition";
        const password = "skills-test";
        const auth = btoa(`${username}:${password}`);

        const response = await axios.get(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            headers: {
              Authorization: `Basic ${auth}`,
            },
          }
        );

        const jessicaTaylor = response.data.find(
          (p) => p.name === "Jessica Taylor"
        );
        if (jessicaTaylor) {
          setPatient(jessicaTaylor);
        } else {
          console.log("Jessica Taylor not found.");
        }
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="py-6">
        <div className="grid grid-flow-col auto-cols-max gap-x-6 gap-y-4">
          <PatientList />
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-x-6">
              {patient && <History patient={patient} />}
              {patient && <PatientData patient={patient} />}
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <div className="four p-4">
                <div className="container my-5 mx-auto">
                  <div className="card px-4">
                    <h5 className="heading-text">Diagnosis List</h5>
                    <div className="mt-5 mb-5">
                      <table className="w-full">
                        <thead>
                          <tr>
                            <th className="card-text2 p-4 bg-gray-300 rounded-tl-lg rounded-bl-lg">
                              Problem/Diagnostics
                            </th>
                            <th className="card-text2 p-4 bg-gray-300">
                              Description
                            </th>
                            <th className="card-text2 p-4 bg-gray-300 rounded-tr-lg rounded-br-lg">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {patient?.diagnostic_list.map((diag, index) => (
                            <tr
                              key={index}
                              className="border-b border-gray-200 w-full"
                            >
                              <td className="card-text1 py-2 px-4">
                                {diag.name}
                              </td>
                              <td className="card-text1 py-2 px-4">
                                {diag.description}
                              </td>
                              <td className="card-text1 py-2 px-4">
                                {diag.status}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="five p-4">
                <div className="container my-5 mx-auto">
                  <div className="card px-4">
                    <h5 className="heading-text">Lab Results</h5>
                    <ul className="mt-4">
                      {patient?.lab_results.map((result, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between hover:bg-gray-300 px-6 rounded-lg"
                        >
                          <li className="border-b border-gray-200 w-full py-3">
                            {result}
                          </li>
                          <img className="icon" src={Dload} alt="dload" />
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
