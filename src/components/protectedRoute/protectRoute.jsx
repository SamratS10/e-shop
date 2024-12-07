import { Navigate, useLocation } from "react-router-dom";

const ProtectRoute = ({ isAuth, user, children }) => {
    const location = useLocation();
    console.log(user)
    // Redirect unauthenticated users to login unless already on auth pages
    if (!isAuth && !(location.pathname.includes("/login") || location.pathname.includes("/register"))) {
        return <Navigate to="/auth/login" />;
    }

    // Redirect authenticated users away from login/register pages based on their role
    if (isAuth && (location.pathname.includes("/login") || location.pathname.includes("/register"))) {
        return user?.role === "admin" ? <Navigate to="/admin/dashboard" /> : <Navigate to="/shop/home" />;
    }

    // Prevent non-admin users from accessing admin routes
    if (isAuth && user?.role !== "admin" && location.pathname.includes("/admin")) {
        return <Navigate to="/unauth-page" />;
    }

    // Prevent admin users from accessing shop routes
    if (isAuth && user?.role === "admin" && location.pathname.includes("/shop")) {
        return <Navigate to="/admin/dashboard" />;
    }

    // If all checks pass, render the children
    return <>{children}</>;
};

export default ProtectRoute;

// import { Navigate, useLocation } from "react-router-dom"

// const ProtectRoute = ({isAuth,user,children})=>{
//     const location = useLocation()
//     if(!isAuth && !(location.pathname.includes("/login") || location.pathname.includes("/register"))){
//         return <Navigate to="/auth/login"/>
//     }
//     if(isAuth && (location.pathname.includes("/login") || location.pathname.includes("/register"))){
//         if(user?.role==="admin"){
//             return <Navigate to="/admin/dashboard"/>
//         }
//         else{
//             return <Navigate to="/shop/home" />
//         }
//     }
//     if(isAuth && user?.role!=="admin" && location.pathname.includes("/admin")){
//         return <Navigate to='/unauth-page'/>
//     }
//     if(isAuth && user?.role==="admin" && location.pathname.includes("/shop")){
//         return <Navigate to="/admin/dashboard"/>
//     }
//     return <>{children}</>
// }

// export default ProtectRoute