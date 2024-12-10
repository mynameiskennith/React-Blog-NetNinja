import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function BlogDetails(){
    const {id} = useParams();

    return (
        <div className="blog-details">
            <h2>Blog Details - {id}</h2>
        </div>
    );
};