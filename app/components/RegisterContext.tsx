"use client";

import { db } from "@/services/firebase";
import { onValue, ref, set } from "@firebase/database";
import { useContext, useEffect, useState } from "react";
import React, { ReactChildren, ReactChild } from "react";
import { successMessage } from "./helper";
const { createContext } = require("react");
import toast from "react-hot-toast";

const registerContext = createContext();

interface Props {
  children: ReactChild | ReactChildren;
}

function RegisterProvider({ children }: Props) {
  const [name, setName] = useState("");
  const [index, setIndex] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gmail, setGmail] = useState("");
  const [uomMail, setUomMail] = useState("");
  const [batch, setBatch] = useState("");
  const [faculty, setFaculty] = useState("");
  const [previousExperience, setPreviousExperience] = useState("");
  const [department, setDepartment] = useState("");
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [checkUserExist, setCheckUserExist] = useState(false);

  const [enterPinButton, setEnterPinButton] = useState(false);

  useEffect(function () {
    const name: any = localStorage.getItem("name");
    const index: any = localStorage.getItem("index");
    const contactNo: any = localStorage.getItem("contactNo");
    const gmail: any = localStorage.getItem("gmail");
    const uomMail: any = localStorage.getItem("uomMail");
    const batch: any = localStorage.getItem("batch");
    const faculty: any = localStorage.getItem("faculty");
    const department: any = localStorage.getItem("department");
    const previosEx: any = localStorage.getItem("previousEx");

    setName(name);
    setIndex(index);
    setMobileNumber(contactNo);
    setGmail(gmail);
    setUomMail(uomMail);
    setBatch(batch);
    setFaculty(faculty);
    setDepartment(department);
    setPreviousExperience(previosEx);
  }, []);

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    localStorage.setItem("name", e.target.value);
  }

  function handleIndex(e: React.ChangeEvent<HTMLInputElement>) {
    setIndex(e.target.value);
    localStorage.setItem("index", e.target.value);
  }

  function handleTelephone(e: React.ChangeEvent<HTMLInputElement>) {
    setMobileNumber(e.target.value);
    localStorage.setItem("contactNo", e.target.value);
  }
  function handleGmail(e: React.ChangeEvent<HTMLInputElement>) {
    setGmail(e.target.value);
    localStorage.setItem("gmail", e.target.value);
  }
  function handleUomMail(e: React.ChangeEvent<HTMLInputElement>) {
    setUomMail(e.target.value);
    localStorage.setItem("uomMail", e.target.value);
  }
  function handleBatch(e: React.ChangeEvent<HTMLInputElement>) {
    setBatch(e.target.value);
    localStorage.setItem("batch", e.target.value);
  }
  function handlePreviousExperions(e: React.ChangeEvent<HTMLInputElement>) {
    setPreviousExperience(e.target.value);
    localStorage.setItem("previousEx", e.target.value);
  }
  function handleFaculty(e: React.ChangeEvent<HTMLInputElement>) {
    setFaculty(e.target.value);
    localStorage.setItem("faculty", e.target.value);
  }
  function handleDepartment(e: React.ChangeEvent<HTMLInputElement>) {
    setDepartment(e.target.value);
    localStorage.setItem("department", e.target.value);
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);
    // localStorage.setItem("checked", e.target.value);
  }

  function clearForm() {
    setName("");
    setIndex("");
    setMobileNumber("");
    setGmail("");
    setUomMail("");
    setBatch("");
    setFaculty("");
    setDepartment("");
    setChecked(false);
    setPreviousExperience("");
  }

  async function saveData() {
    const starCountRef = ref(db, "user/");
    // const check = checkPIN();
    // if (!check) {
    //   warningMessage("Your pin number is wrong");
    //   return;
    // }
    let id = 0;
    // const starCountRef = ref(db, "user/");
    onValue(starCountRef, (snapshot) => {
      console.log([snapshot.val()]);
      id = Object.keys(snapshot.val()).length;
    });

    // const querySnapshot = await getDocs(collection(db, "user"));
    // const id = querySnapshot.docs.length + 1;
    const registerId = `SB-${id + 1}`;

    const storeData = {
      name,
      index,
      telephone: mobileNumber,
      gmail,
      uomMail,
      batch,
      faculty,
      department,
      previousExperience,
      registerId,
    };

    set(ref(db, "user/" + index), storeData);

    // successMessage("Data save successfully");
    toast.success("Form Submitted successfully");

    localStorage.clear();
    clearForm();
    setEnterPinButton(false);

    setShowModal(false);

    return true;
  }

  return (
    <registerContext.Provider
      value={{
        saveData,

        previousExperience,
        handlePreviousExperions,

        enterPinButton,
        setEnterPinButton,

        checkUserExist,
        setCheckUserExist,
        clearForm,
        handleTelephone,
        handleGmail,
        handleUomMail,
        handleBatch,
        handleFaculty,
        handleDepartment,
        handleChange,
        handleName,
        handleIndex,
        name,
        index,
        mobileNumber,
        gmail,
        uomMail,
        batch,
        faculty,
        department,
        checked,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </registerContext.Provider>
  );
}

function useRegister() {
  const context = useContext(registerContext);
  if (context === undefined)
    throw new Error(
      "🧨🧨register context was used outside the RegisterProvider"
    );
  return context;
}

export { RegisterProvider, useRegister };
