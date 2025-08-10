const Weather = ({timeofday}) => { 
     return timeofday === "night" ? (
        <h1>good night</h1>
    ) : (
        <h1>good morning</h1>
    );
};
const All = () => {
    return (
        <section>
            <Weather timeofday = "night" />
        </section>
    )
}
export default All;
