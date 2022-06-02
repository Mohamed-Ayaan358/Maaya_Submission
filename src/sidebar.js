import * as React from "react";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FolderIcon from "@mui/icons-material/Folder";

export const SidebarData = [
  {
    title: "About",
    path: "/",
    icon: <DashboardIcon />,
    cName: "nav-text",
  },
  {
    title: "Task 1",
    path: "/task1",
    icon: <FolderIcon />,
    cName: "nav-text",
  },
  {
    title: "Task 2",
    path: "/task2",
    icon: <FolderIcon />,
    cName: "nav-text",
  },
];
