function DestructureProps({ name, rollNo, marks }) {
  return (
    <>
      <h1 className="text-3xl">Destructure Props Passing </h1>
      <h2>Name: {name}</h2>
      <h2>
        {name} roll number is {rollNo} and marks is {marks}
      </h2>
    </>
  );
}
export default DestructureProps;
