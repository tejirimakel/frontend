import Rest from "./assets/img/respiratory-rate.svg";
import Temp from "./assets/img/temperature.svg";
import Heart from "./assets/img/HeartBPM.svg";
import Down from "./assets/img/down.svg";
import arrowUp from "./assets/img/ArrowUp.svg";
import arrowDown from "./assets/img/ArrowDown.svg";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import PropTypes from "prop-types";

function History({ patient }) {
  if (!patient || patient.name !== "Jessica Taylor") {
    return <div>No patient data found.</div>;
  }

  // Convert year to string for comparison
  const diagnosisHistoryWithYearsAsStrings = patient.diagnosis_history.map(
    (entry) => ({
      ...entry,
      year: entry.year.toString(),
    })
  );

  // Filter diagnosis_history to include only Oct 2023 - Mar 2024
  const filteredDiagnosisHistory = diagnosisHistoryWithYearsAsStrings.filter(
    (entry) =>
      (["October", "November", "December"].includes(entry.month) &&
        entry.year === "2023") ||
      (["January", "February", "March"].includes(entry.month) &&
        entry.year === "2024")
  );

  const chartData = {
    labels: filteredDiagnosisHistory.map(
      (entry) => `${entry.month} ${entry.year}`
    ),
    datasets: [
      {
        label: "Systolic",
        data: filteredDiagnosisHistory.map(
          (entry) => entry.blood_pressure.systolic.value
        ),
        borderColor: "#ec4899",
        backgroundColor: "#ec4899",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Diastolic",
        data: filteredDiagnosisHistory.map(
          (entry) => entry.blood_pressure.diastolic.value
        ),
        borderColor: "#a78bfa",
        backgroundColor: "#a78bfa",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 180,
      },
    },
  };

  return (
    <>
      <div className="two p-4 mt-2">
        <div className="container my-5 mx-auto">
          <div className="card px-4">
            <h5 className="heading-text">Diagnosis History</h5>
            <div className="BPData p-4 mt-8 mb-4 w-[560px]">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <h2 className="btext text-lg font-semibold text-gray-700 mb-2">
                    Blood Pressure
                  </h2>
                  <div className="flex items-center space-x-2 justify-between">
                    <p className="dtext">Last 6 Months</p>
                    <img src={Down} alt="down" className="" />
                  </div>
                </div>
                <div className="flex space-x-14">
                  <Line data={chartData} options={options} />

                  <div className="w-max">
                    <div className="py-2 -mt-8">
                      <div className="flex items-center space-x-2 pb-2">
                        <div className="bg-[#ec4899] rounded-full w-3 h-3"></div>
                        <p className="dtext">Systolic</p>
                      </div>
                      <h3 className="dvalue pb-2">
                        {filteredDiagnosisHistory[0]?.blood_pressure?.systolic
                          ?.value ?? "N/A"}
                      </h3>
                      <div className="flex items center space-x-4">
                        <img src={arrowUp} alt="arrowUp" className="" />
                        <p className="dlevel">
                          {filteredDiagnosisHistory[0]?.blood_pressure?.systolic
                            ?.levels ?? "N/A"}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="py-2">
                      <div className="flex items-center space-x-2 pb-2">
                        <div className="bg-[#a78bfa] rounded-full w-3 h-3"></div>
                        <p className="dtext">Diastolic</p>
                      </div>
                      <h3 className="dvalue pb-2">
                        {filteredDiagnosisHistory[0]?.blood_pressure?.diastolic
                          ?.value ?? "N/A"}
                      </h3>
                      <div className="flex items center space-x-4">
                        <img src={arrowDown} alt="arrowDown" className="" />
                        <p className="dlevel">
                          {filteredDiagnosisHistory[0]?.blood_pressure
                            ?.diastolic?.levels ?? "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-x-4">
              {/* Respiratory Rate */}
              <div className="ImgBox1 p-6">
                <img src={Rest} alt="Respiratory Rate" className="" />
                <div className="my-3">
                  <p className="dtext">Respiratory</p>
                  <h2 className="dno">
                    {patient.diagnosis_history[0]?.respiratory_rate?.value ??
                      "N/A"}{" "}
                    bpm
                  </h2>
                </div>
                <p className="dstat">
                  {patient.diagnosis_history[0]?.respiratory_rate?.levels ??
                    "N/A"}
                </p>
              </div>
              {/* Temperature */}
              <div className="ImgBox2 p-6">
                <img src={Temp} alt="Temperature" className="" />
                <div className="my-3">
                  <p className="dtext">Temperature</p>
                  <h2 className="dno">
                    {patient.diagnosis_history[0]?.temperature?.value ?? "N/A"}{" "}
                    F
                  </h2>
                </div>
                <p className="dstat">
                  {patient.diagnosis_history[0]?.temperature?.levels ?? "N/A"}
                </p>
              </div>
              {/* Heart Rate */}
              <div className="ImgBox2 p-6">
                <img src={Heart} alt="Heart Rate" className="" />
                <div className="my-3">
                  <p className="dtext">Heart Rate</p>
                  <h2 className="dno">
                    {patient.diagnosis_history[0]?.heart_rate?.value ?? "N/A"}{" "}
                    bpm
                  </h2>
                </div>
                <p className="dstat">
                  {patient.diagnosis_history[0]?.heart_rate?.levels ?? "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
History.propTypes = {
  patient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    diagnosis_history: PropTypes.arrayOf(
      PropTypes.shape({
        month: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        blood_pressure: PropTypes.shape({
          systolic: PropTypes.shape({
            value: PropTypes.number.isRequired,
            levels: PropTypes.string,
          }),
          diastolic: PropTypes.shape({
            value: PropTypes.number.isRequired,
            levels: PropTypes.string,
          }),
        }),
        respiratory_rate: PropTypes.shape({
          value: PropTypes.number,
          levels: PropTypes.string,
        }),
        temperature: PropTypes.shape({
          value: PropTypes.number,
          levels: PropTypes.string,
        }),
        heart_rate: PropTypes.shape({
          value: PropTypes.number,
          levels: PropTypes.string,
        }),
      })
    ).isRequired,
  }).isRequired,
};

export default History;
