import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./scenes/dashboard/";
import Sidebar from "./scenes/global/Sidebar";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Team from "./scenes/team";
import Calendar from "./scenes/calendar";
import LoginPage from "./scenes/login";

function App() {
  const HeaderLayout = () => (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Outlet />
      </main>
    </div>
  );
  const [theme, colorMode] = useMode();
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: <HeaderLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
          loader: async () => {
            return {
              data: "Mehmet Akif Pinarci",
            };
          },
        },
        {
          path: "team",
          element: <Team />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
        {
          path: "invoices",
          element: <Invoices />,
        },
        {
          path: "form",
          element: <Form />,
        },
        {
          path: "calendar",
          element: <Calendar />,
        },
        {
          path: "faq",
          element: <FAQ />,
        },
        {
          path: "bar",
          element: <Bar />,
        },
        {
          path: "pie",
          element: <Pie />,
        },
        {
          path: "line",
          element: <Line />,
        },
        {
          path: "geography",
          element: <Geography />,
        },
      ],
    },
  ]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
