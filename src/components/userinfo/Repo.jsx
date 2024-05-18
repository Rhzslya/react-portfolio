import React, { useEffect, useState } from "react";

export default function LatestCommit() {
  const [latestCommit, setLatestCommit] = useState(null);

  useEffect(() => {
    const fetchLatestCommit = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/Rhzslya/react-portfolio/commits/main"
        );
        const data = await response.json();

        const sha = data.sha.substring(0, 7);
        setLatestCommit(sha);
      } catch (error) {
        console.error("Failed to fetch latest commit: ", error);
      }
    };

    fetchLatestCommit();
  }, []);

  return (
    <div className="commit__code">
      <a
        href="https://github.com/Rhzslya/react-portfolio"
        target="_blank"
        className="repo__link"
      >
        <svg
          fill="#000000"
          width="20px"
          height="20px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className="repo__link-icon"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>ionicons-v5-d</title>
            <path d="M416,160a64,64,0,1,0-96.27,55.24c-2.29,29.08-20.08,37-75,48.42-17.76,3.68-35.93,7.45-52.71,13.93V151.39a64,64,0,1,0-64,0V360.61a64,64,0,1,0,64.42.24c2.39-18,16-24.33,65.26-34.52,27.43-5.67,55.78-11.54,79.78-26.95,29-18.58,44.53-46.78,46.36-83.89A64,64,0,0,0,416,160ZM160,64a32,32,0,1,1-32,32A32,32,0,0,1,160,64Zm0,384a32,32,0,1,1,32-32A32,32,0,0,1,160,448ZM352,192a32,32,0,1,1,32-32A32,32,0,0,1,352,192Z"></path>
          </g>
        </svg>
        <small>{latestCommit}</small>
      </a>
    </div>
  );
}
