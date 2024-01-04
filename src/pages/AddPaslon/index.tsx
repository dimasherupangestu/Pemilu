import Navbar from "../../layout/Navbar";

import Footerr from "../../layout/Footer";
import FormAddPaslon from "../../layout/FormAddPaslon";

function AddPaslonPage(props: { admin: boolean }) {
  return (
    <>
      <Navbar />
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto pb-[140px] w-full">
        <h1 className="text-5xl sm:text-[38px] md:text-[44px] text-light_green-900 mt-8 md:mt-4 font-bold font-inter">
          ADD PASLON
        </h1>

        <FormAddPaslon admin={props.admin} />
      </div>
      <Footerr />
    </>
  );
}

export default AddPaslonPage;
