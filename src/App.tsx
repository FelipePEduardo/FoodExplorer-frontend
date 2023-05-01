import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { SignIn } from "./pages/SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { FoodDetails } from "./pages/FoodDetails";
import { NewPlate } from "./pages/NewPlate";
import { EditPlate } from "./pages/EditPlate";

const authRoutes = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />
  },
  {
    path: "/register",
    element: <SignUp />
  },
])

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/foodDetails',
    element: <FoodDetails />
  },
  {
    path: '/novoPrato',
    element: <NewPlate />
  },
  {
    path: '/editarPrato',
    element: <EditPlate />
  },
])

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <RouterProvider router={appRoutes} />
    </ThemeProvider>
  )
}