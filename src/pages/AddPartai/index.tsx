import Navbar from "../../layout/Navbar";
import Footerr from "../../layout/Footer";
import FormAddPartai from "../../layout/FormAddPartai";
interface PropsLogin {
  isUserLoggedIn: boolean;
  admin: boolean;
}
const AddPartaiPage: React.FC<PropsLogin> = ({ isUserLoggedIn, admin }) => {
  return (
    <>
      <Navbar isUserLoggedIn={isUserLoggedIn} />

      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto pb-[140px] w-full">
        <h1 className="text-5xl sm:text-[38px] md:text-[44px] text-light_green-900 mt-8 md:mt-4 font-bold font-inter">
          ADD PARTAI
        </h1>
        {/* {admin ? "kamu login" : "kamubelom login"} */}
        <FormAddPartai admin={admin} />
      </div>
      <Footerr />
    </>
  );
};

export default AddPartaiPage;
