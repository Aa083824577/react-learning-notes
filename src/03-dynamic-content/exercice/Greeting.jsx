// so in this exercice i am going to  build a Greeting component
function Greeting() {
    const myname = 'brahim'
    const date = new Date();
  return (
    <div>
      <h1>hello {myname}</h1>
      <p>{date.getDate()}</p>
    </div>
  );
}
export default Greeting;
