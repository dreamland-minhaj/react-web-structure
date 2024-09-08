import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
const Layouts = () => {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}
export default Layouts;