import React, { useState, useEffect } from "react";

export default function ClockAndLocation() {
  // Get Time
  const [cTimes, setCTimes] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setCTimes(time);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  //   Get Location
  const [ipAddress, setIpAddress] = useState("");
  const [geoInfo, setGeoInfo] = useState({});

  useEffect(() => {
    const getVisitorIP = async () => {
      const response = await fetch("https://api.ipify.org");
      const data = await response.text();
      setIpAddress(data);
    };

    getVisitorIP();
  }, []);

  useEffect(() => {
    if (ipAddress) {
      const fetchIPInfo = async () => {
        try {
          const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
          const data = await response.json();
          setGeoInfo(data);
        } catch (err) {
          console.error("Failed to fetch location info: ", err);
        }
      };

      fetchIPInfo();
    }
  }, [ipAddress]);

  return (
    <div className="local__time">
      <svg
        fill="#000000"
        height="15px"
        width="15px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 490 490"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M245,0C109.5,0,0,109.5,0,245s109.5,245,245,245s245-109.5,245-245S380.5,0,245,0z M245,449.3 c-112.6,0-204.3-91.7-204.3-204.3S132.4,40.7,245,40.7S449.3,132.4,449.3,245S357.6,449.3,245,449.3z"></path>{" "}
              <path d="M290.9,224.1h-25v-95.9c0-11.5-9.4-20.9-20.9-20.9s-20.9,9.4-20.9,20.9V245c0,11.5,9.4,20.9,20.9,20.9h45.9 c11.5,0,20.9-9.4,20.9-20.9S302.3,224.1,290.9,224.1z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
      <small className="local__time-content">
        <span>{cTimes}</span>
        <span>
          {geoInfo.city}, {geoInfo.country}
        </span>{" "}
      </small>
    </div>
  );
}
