function Ipl(props) {
  const { name, handle } = props;

  return (
    <>
      <h1>Hello: {name}</h1>
      <button onClick={() => handle("Ee sala cup namde")}>Click</button>
    </>
  );
}
export default Ipl;
