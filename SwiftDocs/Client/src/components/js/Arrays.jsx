export {
  SideBar,
  FirstNavBar,
  UsersSidebarArray,
  SecondeNavBarArray,
  SecondNavBar,
  ThirdNavBar,
};
import {
  FaFilePen,
  FaFileCirclePlus,
  FaFileCircleExclamation,
} from "react-icons/fa6";
import { BiSolidFileFind, BiEditAlt, BiSearchAlt } from "react-icons/bi";
import { HiViewGridAdd } from "react-icons/hi";

const SideBar = [
  {
    btn: (
      <button className="h-10 w-12 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="h-5"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </button>
    ),
  },
  {
    btn: (
      <button className="h-10 w-12   flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="h-5"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      </button>
    ),
  },
  {
    btn: (
      <button className="h-10 w-12   flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="h-5"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          <line x1="12" y1="11" x2="12" y2="17"></line>
          <line x1="9" y1="14" x2="15" y2="14"></line>
        </svg>
      </button>
    ),
  },
];

const FirstNavBar = [
  {
    title: "Profile",
  },
  {
    title: "Users",
  },
  {
    title: "Messages",
  },
];

const SecondNavBar = [
  {
    title: "Hierarchy",
  },
  {
    title: "Users",
  },
  {
    title: (
      <div className="flex gap-3 text-xl">
        Process <HiViewGridAdd />
      </div>
    ),
  },
  {
    title: (
      <div className="flex gap-3 text-xl">
        Process <BiEditAlt />
      </div>
    ),
  },
  {
    title: (
      <div className="flex gap-3 text-xl">
        Process <BiSearchAlt />
      </div>
    ),
  },
];

const ThirdNavBar = [
  {
    title: (
      <div className="flex gap-3 text-xl">
        File <FaFileCirclePlus />
      </div>
    ),
  },
  {
    title: (
      <div className="flex gap-3 text-xl">
        File <BiSolidFileFind />
      </div>
    ),
  },
  {
    title: (
      <div className="flex gap-3 text-xl">
        File <FaFilePen />
      </div>
    ),
  },
  {
    title: (
      <div className="flex gap-3 text-xl">
        File <FaFileCircleExclamation />
      </div>
    ),
  },
];

const UsersSidebarArray = [
  {
    name: "Nacereddine Chouich",
    Status: "Admin",
    Email: "Full stack dev@gmail.com",
    Position: "Full stack dev",
    departement: "IT",
    Activities: {
      title: "activiti1",
      date: { date: new Date().getFullYear() },
      Description: "Description",
      Flux: "Flux",
      fillname: "pdf",
    },
  },
  {
    name: "Arioua Imen",
    Status: "Full stack dev",
    departement: "IT",
    Activities: {
      title: "activiti1",
      date: { date: new Date().getFullYear() },
      Description: "Description",
      Flux: "Flux",
      fillname: "pdf",
    },
  },
  {
    name: "Said Chouich",
    Status: "Full stack dev",
    departement: "IT",
    Activities: {
      title: "activiti1",
      date: { date: new Date().getFullYear() },
      Description: "Description",
      Flux: "Flux",
      fillname: "pdf",
    },
  },
  {
    name: "Lorem ipsum dolor sit ",
    Status: "Full stack dev",
    departement: "IT",
    Activities: {
      title: "activiti1",
      date: { date: new Date().getFullYear() },
      Description: "Description",
      Flux: "Flux",
      fillname: "pdf",
    },
  },
  {
    name: "Nacereddine Chouich",
    Status: "Full stack dev",
    departement: "IT",
    Activities: {
      title: "activiti1",
      date: { date: new Date().getFullYear() },
      Description: "Description",
      Flux: "Flux",
      fillname: "pdf",
    },
  },
  {
    name: "Nacereddine Chouich",
    Status: "Full stack dev",
    departement: "IT",
    Activities: {
      title: "activiti1",
      date: { date: new Date().getFullYear() },
      Description: "Description",
      Flux: "Flux",
      fillname: "pdf",
    },
  },
  {
    name: "Nacereddine Chouich",
    Status: "Full stack dev",
    departement: "IT",
    Activities: {
      title: "activiti1",
      date: { date: new Date().getFullYear() },
      Description: "Description",
      Flux: "Flux",
      fillname: "pdf",
    },
  },
  {
    name: "Nacereddine Chouich",
    Status: "Full stack dev",
    departement: "IT",
    Activities: {
      title: "activiti1",
      date: { date: new Date().getFullYear() },
      Description: "Description",
      Flux: "Flux",
      fillname: "pdf",
    },
  },
  {
    name: "Nacereddine Chouich",
    Status: "Full stack dev",
    departement: "IT",
    Activities: {
      title: "activiti1",
      date: { date: new Date().getFullYear() },
      Description: "Description",
      Flux: "Flux",
      fillname: "pdf",
    },
  },
];

const SecondeNavBarArray = [
  {
    title: "Activities",
  },
  {
    title: "Account",
  },
];
