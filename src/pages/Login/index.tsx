import React from "react";
import Submit from "../../components/Submit";
import FromInput from "../../components/From";

const Login: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-slate-200">
        <div className=" max-w-3xl bg-white-A700 p-7 rounded-xl shadow-lg">
          <div className=" w-[560px] md:max-w-md">
            <h1 className="text-5xl text-[rgb(94,84,0)] font-bold mx-auto my-5 text-center uppercase">
              Login
            </h1>

            <form action="">
              <FromInput
                name="username"
                label="User Name"
                placeholder="Masukan UserName Kamu ...."
                type="text"
              />
              <FromInput
                name="password"
                label="Password"
                placeholder="*****"
                type="password"
              />
              <Submit name="Submit" type="submit" className="" />
            </form>
            <p className="mt-4 text-center text-slate-400 capitalize italic  ">
              belum Memiliki akun ?{" "}
              <a href="#" className="text-blue-300 underline">
                register
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
