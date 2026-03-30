function Props1(props) {
  return (
    <>
      <h1 className="text-3xl">Only Props Passing </h1>
      <h2>Name: {props.name}</h2>
      <h2>
        {props.name} roll number is {props.rollNo} and marks is {props.marks}
      </h2>
    </>
  );
}
export default Props1;
