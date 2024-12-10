import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {
    const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    // let name = 'Mario';
    // const [name, setName] = useState('mario');
    // const [age,setAge] = useState(25);

    // const [blogs, setBlogs] = useState([
    //     // { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     // { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     // { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
    // ])
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);


    // useEffect(()=>{
    //     console.log('Use effect ran');
    //     setTimeout(()=>{
    //         fetch("http://localhost:8000/blogs")
    //     .then(res =>{
    //         if(!res.ok){
    //             throw Error('Could Not fetch the data');
    //         }
    //         return res.json()
    //     }).then((data)=>{
    //         console.log(data);
    //         setError(null);
    //         setBlogs(data);
    //         setIsPending(false);
    //     })
    //     .catch(e=>{
    //         // console.log(e.message);
    //         setError(e.message);
    //         setIsPending(false);
    //     })
    //     },1000)
    // },[]);
    //[] makes the useEffect run only on the first render
    //[name] makes the useEffect run only if value of name changes



    // const handleDelete = (id)=>{
    //     const newBlogs = blogs.filter((blog)=>(blog.id!==id));
    //     setBlogs(newBlogs);
    // }

    // const handleClick = ()=>{
    //     // name = 'luigi';
    //     // console.log("hello, ninjas")

    //     // setName('luigi');
    //     // setAge(35);
    // }

    // const handleClickAgain = (name)=>{
    //     console.log('helo'+name)
    // }

    return (
        <div className="home">
            {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {blogs && <BlogList blogs={blogs} title={"All Blogs!"}/>}            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title={"Mario's Blogs"}/> */}
            {/* {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))} */}
        </div> 
        // <div className="home">
        //     {/* <h2>HomePage</h2> */}
        //     {/* <p>{name} is {age} years old</p> */}
        //     {/* <button onClick={handleClick}>Click me</button> */}
        //     {/* <button onClick={()=>{
        //         handleClickAgain('yoshin');
        //     }}>Click me again</button> */}
        // </div>
     );
}
 
export default Home;