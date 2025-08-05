const Appp = () => {
  const number = [1, 2, 3, 4, 5];
  return (
    <main>
        {/* so this is how we list an array using map methode  */}
      {number.map((number) => (
        <ul key={number}>
          <li >{number}</li>
        </ul>
      ))}
    </main>
  );
};
export default Appp;
