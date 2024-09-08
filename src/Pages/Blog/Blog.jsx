import { Link } from 'react-router-dom';
import data from '../../Data/data';

const Blog =()=>{
    return(
        <>
            <div className="blog-area">
                <div className="container w-8/12 mx-auto ">
                {data.map((items)=>{
                    return(
                        <div key={items.id} className="blog-items flex gap-4 bg-slate-50 shadow-md px-4 py-3 mt-3">
                        <div className="blog-img">
                            <img className="w-52 h-32 object-cover shadow-md rounded-md" src={items.photo} alt="" />
                        </div>
                        <div className="blog-content">
                            <h2 className="font-extrabold text-xl">{items.title}</h2>
                            <p className="font-light text-sm mb-4">{items.desc}</p>
                            <Link className="bg-blue-700 text-white px-4 py-2 rounded-md" to={`/blog/${items.id}`}>Read More</Link>
                        </div>
                    </div>
                    );
                })}
                    
                </div>
            </div>
        </>
    );
}
export default Blog;