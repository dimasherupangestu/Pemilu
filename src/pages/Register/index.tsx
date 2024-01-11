import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FromInput from "../../components/From";
import Submit from "../../components/Submit";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    address: "",
    sex: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/register",
        formData
      );
      console.log(response.data);
      navigate("/login");
    } catch (error: any) {
      console.error(error.response.data);
      // Tampilkan pesan kesalahan kepada pengguna
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-slate-200">
        <div className=" max-w-3xl bg-white-A700 p-7 rounded-xl shadow-lg my-4">
          <div className=" w-[560px] md:max-w-md">
            <h1 className="text-5xl text-[rgb(94,84,0)] font-bold mx-auto my-5 text-center uppercase">
              Register
            </h1>

            <form onSubmit={handleRegister}>
              <FromInput
                label="FullName"
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                placeholder="Masukkan Nama Lengkap Anda"
              />
              <FromInput
                label="Alamat"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Masukkan Alamat Anda"
              />
              <FromInput
                label="JenisKelamin"
                type="text"
                name="sex"
                value={formData.sex}
                onChange={handleInputChange}
                placeholder="Jenis Kelamin Anda"
              />
              <FromInput
                label="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Masukkan Username Anda"
              />
              <FromInput
                label="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Masukkan Password Anda"
              />
              <Submit name="submit" className="" type="submit" />
            </form>
            <p className="mt-4 text-center text-slate-400 capitalize italic  ">
              Anda sudah memiliki akun?{" "}
              <a href="#" className="text-blue-300 underline">
                login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
