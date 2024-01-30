import React, { useState } from "react";

import { useRegister } from "./RegisterContext";
import { Box, Button, Grid, Typography } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import Modal from "@mui/material/Modal";

interface modalProps {
  fn: () => void;
}

export default function Modals({ fn }: modalProps) {
  const { setShowModal, showModal, setOtp, otp, sendOTP, saveData }: any =
    useRegister();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };

  function handleClose() {
    setShowModal(false);
  }

  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ color: "white", fontFamily: "Amenti Medium" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Are you sure want to registration ?
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, mb: 3, color: "white", fontFamily: "Amenti Medium" }}
          >
            Please confirm that you want to complete the registration process by
            clicking 'Confirm' below.
          </Typography>

          <Typography
            sx={{
              mt: 2,
              gap: 2,
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Button onClick={handleClose} variant="outlined">
              Close
            </Button>
            <Button onClick={() => saveData()} variant="contained">
              Confirm
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

// <>
// <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  ">
//   <div className="relative  w-1/2 my-6 mx-auto max-w-3xl">

//     <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

//       <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
//         <h3 className="text-3xl font-semibold">Email verification </h3>
//         <button
//           className="p-1  ml-auto bg-white border-0 text-black  rounded-full  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//           onClick={() => setShowModal(false)}
//         >
//           <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
//             ×
//           </span>
//         </button>
//       </div>

//       <div className="relative p-6 flex flex-col justify-center items-center">
//         <div> Your code was sent to you via uom email</div>
//         <div
//           className="flex justify-center space-x-3 mt-10"
//           data-hs-pin-input
//         >
//           <input
//             type="text"
//             value={firstInput}
//             maxLength={1}
//             onChange={(e) => setFirstInput(e.target.value)}
//             className="block h-10 w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
//             data-hs-pin-input-item
//           />
//           <input
//             type="text"
//             value={secondInput}
//             maxLength={1}
//             onChange={(e) => setSecondInput(e.target.value)}
//             className="block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
//             data-hs-pin-input-item
//           />
//           <input
//             type="text"
//             value={thiredInput}
//             maxLength={1}
//             onChange={(e) => setThiredInput(e.target.value)}
//             className="block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
//             data-hs-pin-input-item
//           />
//           <input
//             type="text"
//             value={fouthInput}
//             onChange={(e) => setFouthInput(e.target.value)}
//             className="block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
//             data-hs-pin-input-item
//             maxLength={1}
//           />
//         </div>
//       </div>

//       <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b gap-5 bg-black">
//         <Button
//           variant="outlined"
//           color="error"
//           onClick={() => sendOTP()}
//         >
//           Resend
//         </Button>
//         <Button variant="outlined" color="success" onClick={() => fn()}>
//           Verify
//         </Button>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
// </>
