import { RouterProvider } from "react-router-dom";
import router from "./Route/Router";
const App=()=>{
    return(
        <>
        <RouterProvider router={router}/>
        </>
    );
}
export default App;