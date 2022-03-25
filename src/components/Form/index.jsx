import React, { useState } from "react";
import "./style.css";

const Form = () => {
  const [inputs, setInputs] = useState({
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    fotoSurat: "",
    harapan: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    pendidikan: "",
    kelas: "",
    fotoSurat: "",
  });

  function handleInput(e) {
    const value = e.target.value;

    setInputs({
      ...inputs,
      [e.target.name]: value,
    });

    const fileName = e.target.files[0].name;

    if (e.target.type === "file") {
      return setInputs({ ...inputs, [e.target.name]: fileName });
    }
    console.log(fileName);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.pendidikan === "") {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        pendidikan: "Pilih salah satu",
      }));
      return;
    } else {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        pendidikan: "",
      }));
    }

    if (inputs.kelas === "") {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        kelas: "Pilih salah satu kelas",
      }));
      return;
    } else {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        kelas: "",
      }));
    }

    if (inputs.fotoSurat === "") {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        fotoSurat: "Pilih Foto Surat Kesungguhan Terlebih Dahulu",
      }));
      return;
    } else {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        fotoSurat: "",
      }));
    }

    alert(`Data Pendaftar ${inputs.nama} Berhasil Diterima`);

    setInputs({
      nama: "",
      email: "",
      noHandphone: "",
      pendidikan: "",
      kelas: "",
      fotoSurat: "",
      harapan: "",
    });
  };

  const resetInput = () => {
    setInputs({
      nama: "",
      email: "",
      noHandphone: "",
      pendidikan: "",
      kelas: "",
      fotoSurat: "",
      harapan: "",
    });

    setErrorMessage({
      pendidikan: "",
      kelas: "",
      fotoSurat: "",
    });
  };

  return (
    <div className="formApp">
      <form
        onSubmit={handleSubmit}
        onReset={() => {
          resetInput();
        }}
      >
        <h1>Pendaftaran Peserta Coding Bootcamp</h1>
        <div>
          <label className="heading">Nama Lengkap :</label>
          <input
            type="text"
            name="nama"
            pattern="[a-zA-Z'-'\s]*"
            title="Hanya diperbolehkan huruf"
            required
            value={inputs.nama}
            onChange={handleInput}
          />
        </div>
        <div>
          <label className="heading">Email :</label>
          <input
            type="email"
            name="email"
            required
            value={inputs.email}
            onChange={handleInput}
          />
        </div>
        <div>
          <label className="heading">No Handphone :</label>
          <input
            type="text"
            name="noHandphone"
            minLength={9}
            maxLength={14}
            required
            pattern="[0-9]*"
            title="Hanya diperbolehkan angka"
            value={inputs.noHandphone}
            onChange={handleInput}
          />
        </div>
        <div>
          <label className="heading">Pendidikan :</label>
          <div>
            <input
              type="radio"
              name="pendidikan"
              value="IT"
              checked={inputs.pendidikan === "IT"}
              onChange={handleInput}
            />
            <span className="lblRadio">IT</span>
          </div>
          <div>
            <input
              type="radio"
              name="pendidikan"
              className="radioBtn"
              value="NON IT"
              checked={inputs.pendidikan === "NON IT"}
              onChange={handleInput}
            />
            <span className="lblRadio">NON IT</span>
          </div>
          <div className="lblError">
            {!!errorMessage.pendidikan && (
              <div>
                <i>{errorMessage.pendidikan}</i>
              </div>
            )}
          </div>
        </div>
        <div>
          <label className="heading">Kelas Coding yang Dipilih :</label>
          <select
            name="kelas"
            className="inputKelas"
            onChange={handleInput}
            value={inputs.kelas}
          >
            <option value="" disabled>
              Pilih Salah Satu Program
            </option>
            <option value="Coding Backend with Golang">
              Coding Backend with Golang
            </option>
            <option value="Coding Frontend with ReactJS">
              Coding Frontend with ReactJS
            </option>
            <option value="Fullstack Developer">Fullstack Developer</option>
          </select>
        </div>
        <div className="lblError">
          {!!errorMessage.kelas && (
            <div>
              <i>{errorMessage.kelas}</i>
            </div>
          )}
        </div>
        <div>
          <label className="heading">Foto Surat Kesungguhan :</label>
          <input
            type="file"
            name="fotoSurat"
            className="inputFoto"
            accept="image/*"
            onChange={handleInput}
          />
        </div>
        <div className="lblError">
          {!!errorMessage.fotoSurat && (
            <div>
              <i>{errorMessage.fotoSurat}</i>
            </div>
          )}
        </div>

        <div>
          <label className="heading">Harapan Untuk Coding Bootcamp Ini :</label>
          <textarea
            name="harapan"
            value={inputs.harapan}
            onChange={handleInput}
          />
        </div>
        <button type="submit" className="btnSubmit">
          Submit
        </button>
        <button type="reset" className="btnReset">
          Reset
        </button>
      </form>
    </div>
  );
};

export default Form;
