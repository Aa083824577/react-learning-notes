const Cold = () => <h1>its cold outside!</h1>
const Nice = () => <h1>its nice outside</h1>
const Hot = () => <h1>its hot outside</h1>
const Weather = ({temerater}) =>{
    if(temerater <= 15){
        return <Cold/>
    }if(temerater <=25 ){
        return <Nice/>
    }if(temerater >25){
        return <Hot/>
    }
}
const All = () =>{
    return(
        <section>
            <Weather temerater={100} />
        </section>
    )
}
export default All;
