const Home = () => {
    const handleClick = ()=>{
        console.log("hello, ninjas")
    }

    const handleClickAgain = ()=>{

    }

    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleClickAgain}>Click me again</button>
        </div>
     );
}
 
export default Home;
<div className="home">
    <h2>HomePage</h2>
</div>