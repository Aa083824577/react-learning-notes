const Validpassword = () => <h1>valid password</h1>;
const Invalidpassword = () => <h1>invalid password</h1>;

const Password  = (isvalid) => {
    // if(isvalid){
    //     return <Validpassword/>
    // } 
    // return <Invalidpassword/>
    return isvalid ? <Validpassword/> : <Invalidpassword/>
};

function Pass() {
  return (
    <section>
    
    <Password isvalid ={true} />

    </section>
  )
}

export default Pass;
