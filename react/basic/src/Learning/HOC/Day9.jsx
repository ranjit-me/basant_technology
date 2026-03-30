import NormalComponent from "./NormalComponent";
import UpdatedComponent from "./UpdatedComponent";
import "../../App.css";
import NormalUser from "./NormalUser";
import PremiumUser from "./PremiumUser";

function Day9() {
  return (
    <>
      <div>
        <div className="text-4xl">
          <h1>HOC Component </h1>
        </div>

        {/* <NormalComponent name="Normal" />
        <UpdatedComponent name="Updated" /> */}
        <NormalUser />
        <PremiumUser />
      </div>
    </>
  );
}
export default Day9;
