import { useSelector } from "react-redux";

import AdminPage from "../Admin";

import { isLoggedInSelector } from "../redux/slices/authSlice";

function Auth() {
  const isUserLoggedIn = useSelector(isLoggedInSelector)
  return (
    <AdminPage/>
  )
}
export default Auth