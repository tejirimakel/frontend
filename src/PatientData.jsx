import { useState } from "react";
import calendar from "./assets/img/calendar.svg";
import Gender from "./assets/img/FemaleIcon.svg";
import Phone from "./assets/img/PhoneIcon.svg";
import Insure from "./assets/img/InsuranceIcon.svg";
import PropTypes from "prop-types";

function PatientData({ patient }) {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetailsVisibility = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };
  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="three p-4 w-full lg:w-max">
        <div className="container mt-5 mx-auto">
          <div>
            <div className="card px-4">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={patient.profile_picture}
                  alt={`Profile of ${patient.name}`}
                  className="card-img-top mb-4"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">{patient.name}</h5>
                <div className="py-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="iconBox rounded-full bg-gray-100 flex items-center justify-center ">
                      <img className="w-auto" src={calendar} alt="calendar" />
                    </div>
                    <div className="">
                      <p className="card-text1">Date of Birth</p>
                      <p className="card-text2">
                        {new Date(patient.date_of_birth).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="iconBox rounded-full bg-gray-100 flex items-center justify-center ">
                      <img className="w-auto" src={Gender} alt="gender" />
                    </div>
                    <div className="">
                      <p className="card-text1">Gender</p>
                      <p className="card-text2">{patient.gender}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="iconBox rounded-full bg-gray-100 flex items-center justify-center ">
                      <img className="w-auto" src={Phone} alt="phone" />
                    </div>
                    <div className="">
                      <p className="card-text1">Phone Number</p>
                      <p className="card-text2">{patient.phone_number}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="iconBox rounded-full bg-gray-100 flex items-center justify-center ">
                      <img className="w-auto" src={Phone} alt="er" />
                    </div>
                    <div className="">
                      <p className="card-text1">Emergency Contact</p>
                      <p className="card-text2">{patient.emergency_contact}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="iconBox rounded-full bg-gray-100 flex items-center justify-center ">
                      <img className="w-auto" src={Insure} alt="insurance" />
                    </div>
                    <div className="">
                      <p className="card-text1">Insurance Provider</p>
                      <p className="card-text2">{patient.insurance_type}</p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-max">
                  <div
                    style={{
                      display: isDetailsVisible ? "block" : "none",
                    }}
                  >
                    <p className="card-text">Age: {patient.age}</p>
                  </div>
                  <div className="flex items-center justify-center my-3">
                    <button
                      className="SeeBtn"
                      onClick={toggleDetailsVisibility}
                    >
                      {isDetailsVisible
                        ? "Show Less Information"
                        : "Show All Information"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
PatientData.propTypes = {
  patient: PropTypes.shape({
    profile_picture: PropTypes.string,
    name: PropTypes.string.isRequired,
    date_of_birth: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    emergency_contact: PropTypes.string.isRequired,
    insurance_type: PropTypes.string.isRequired,
    age: PropTypes.number,
    diagnostic_list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
      })
    ),
    lab_results: PropTypes.array.isRequired,
  }).isRequired,
};
export default PatientData;
