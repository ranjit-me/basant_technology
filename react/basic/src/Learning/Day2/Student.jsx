function Student({ student }) {
  return (
    <>
      <p> Props Introctions and practice using a const</p>
      <div className="border-1 border-blue-700">
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>isStudent: {student.isStudent ? "Yes" : "No"}</p>
      </div>
    </>
  );
}
export default Student;
