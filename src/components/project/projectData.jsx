import Ryo from "../../asset/Ryo-Profile.png";
import PortfolioWeb1 from "../../asset/portfolioweb-1.png";
import PortfolioWeb2 from "../../asset/portfolioweb-2.png";
import Flugenime from "../../asset/flugelnime.png";
import fileIcon from "../../asset/bxs-file.svg";
import userIcon from "../../asset/bx-user-circle.svg";
import linkIcon from "../../asset/bx-link-external.svg";
import langIcon from "../../asset/bx-code-alt.svg";
import dateIcon from "../../asset/date.svg";
export const projectData = [
  {
    id: 3,
    name: "Flugelnime",
    img: Flugenime,
    projectType: "Website",
    link: "https://rhzslya.github.io/flugelnime/",
    details: [
      {
        icon: fileIcon,
        title: "Project",
        desc: "Website",
      },
      {
        icon: userIcon,
        title: "Client",
        desc: "-",
      },
      {
        icon: langIcon,
        title: "Language",
        desc: "React, TailwindCSS",
      },
      {
        icon: dateIcon,
        title: "Date Created",
        desc: "17-06-2024",
      },
    ],
  },

  {
    id: 2,
    name: "Web Portfolio With React",
    img: PortfolioWeb2,
    projectType: "Website",
    link: "",
    details: [
      {
        icon: fileIcon,
        title: "Project",
        desc: "Website",
      },
      {
        icon: userIcon,
        title: "Client",
        desc: "Nava",
      },
      {
        icon: langIcon,
        title: "Language",
        desc: "HTML, CSS, React",
      },
      {
        icon: dateIcon,
        title: "Date Created",
        desc: "12-03-2024",
      },
    ],
  },
  {
    id: 1,
    name: "Web Portfolio With Vanilla JS",
    img: PortfolioWeb1,
    projectType: "Website",
    link: "https://rhzslya.github.io/rizqi-sabilla.github.io/",
    details: [
      {
        icon: fileIcon,
        title: "Project",
        desc: "Website",
      },
      {
        icon: userIcon,
        title: "Client",
        desc: "Nava",
      },
      {
        icon: langIcon,
        title: "Language",
        desc: "HTML, CSS, Javascript",
      },

      {
        icon: dateIcon,
        title: "Date Created",
        desc: "12-03-2024",
      },
    ],
  },
];
