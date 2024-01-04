import FromInput from "../components/From";
import Label from "../components/From/label";
import TextArea from "../components/From/TextArea";
import Submit from "../components/Submit";
import { Img } from "../components";

function FormAddPartai(props: { admin: boolean }) {
  return (
    <div className="flex md:flex-col flex-row gap-[57px] items-start justify-center max-w-[1005px] mx-auto md:px-5 w-full">
      <Img
        className="md:flex-1 h-[523px] sm:h-auto object-cover rounded-[10px] w-[37%] md:w-full"
        src="../src/images/moyet.png"
        alt="imageOne"
      />
      <div className="flex md:flex-1 flex-col gap-[29px] items-start justify-start w-[58%] md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="w-full text-bold">
            <FromInput
              name="name"
              label="Name"
              placeholder="Masukan Nama Kamu"
            />
          </div>
          <div className="w-full text-bold">
            <FromInput
              name="nomor"
              label="Nomor Urut"
              placeholder="Masukan Nomor Urut Kamu"
            />
          </div>
          <Label htmlFor="visi/misi">Visi / MISI</Label>
          <TextArea name="visi/misi" cols={10} rows={5} />

          <Label htmlFor="visi/misi">Alamat</Label>
          <TextArea name="visi/misi" cols={10} rows={5} />
        </div>

        {props.admin ? (
          <Submit
            name="submit"
            type="submit"
            className="bg-red-400 px-5 py-5"
          />
        ) : (
          <h1 className="text-red-500 font-bold text-2xl text-center mx-auto">
            Anda Bukan Admin
          </h1>
        )}
      </div>
    </div>
  );
}
export default FormAddPartai;
