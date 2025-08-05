// A simple functional component demonstrating how to use dynamic values in JSX
const Test = () => {
    
    const myname = 'brahim ';
    const multiple = (a , b) => a*b
    const nameclass = 'test'
    return(
    <section>
        <h1>{myname}</h1>
        <p> 2+2  = {multiple(10,12)} </p>
        <p>{2+2}</p>
        <p className={nameclass}>my friend list : {['amin','ahmed','ala']}</p>
    </section>
        ) 
}
export default Test;