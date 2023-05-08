import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { SignIn } from "./pages/SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { FoodDetails } from "./pages/FoodDetails";
import { CreatePlate } from "./pages/CreatePlate";
import { EditPlate } from "./pages/EditPlate";
import { Menu } from "./pages/Menu";
import { useAuth } from "./hooks/auth";

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
    path: "/menu",
    element: <Menu />
  },
  {
    path: '/foodDetails',
    element: <FoodDetails />
  },
  {
    path: '/createPlate',
    element: <CreatePlate />
  },
  {
    path: '/editPlate',
    element: <EditPlate />
  },
])

export function App() {
  const { user } = useAuth()

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <RouterProvider router={user ? appRoutes : authRoutes} />
    </ThemeProvider>
  )
}