import { useParams } from "react-router-dom";
import data from "../../Data/data";

const SingleBlog = ()=>{
    const {postId} = useParams();
    const blogs = data.find((data)=>data.id == postId);
    return(
        <>
            <div className="container w-6/12 mx-auto space-y-4 mt-5 bg-gray-50 rounded-md shadow-md p-5">
                <h1 className="text-2xl font-bold">{blogs.title}</h1>
                <img className="w-full rounded-md border-8 border-white" src={blogs.photo} alt="" />
                <p className="mt-4 ">{blogs.desc}</p>
            </div>
        </>
    );
}
export default SingleBlog;