import { useState } from "react";
import back from "../assets/back.svg";
import subtract from "../assets/Subtract.svg";
import { LeftIcon, RightIcon } from "../assets/icons";

const questions = ["What's your name?", "What's your email address?"];

function Waitlist() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <div
      className={`flex flex-col items-center mt-2 bottom-0 right-0 left-0 sticky ${
        open ? "bg-white" : ""
      } z-50`}
    >
      <button
        style={{
          backgroundImage: open ? "" : `url(${subtract})`,
        }}
        onClick={() => setOpen(!open)}
        className={`text-primary font-medium ${
          open
            ? "p-3 bg-[#F3F3F3] rounded-full"
            : "p-2 bg-cover bg-no-repeat bg-center w-[280px]"
        }`}
      >
        {open ? (
          <img src={back} className="-rotate-90 mx-auto" />
        ) : (
          "Join the waitlist"
        )}
      </button>
      {open && (
        <div className="bg-[#F3F3F3] w-full mt-8 p-4">
          <div className="max-w-sm w-full mx-auto flex flex-col items-center gap-4">
            <p className="text-[#7E7E7E]">
              Question {step} of {questions.length}
            </p>
            <div className="flex justify-between items-center w-full">
              <LeftIcon
                className={`cursor-pointer ${step === 1 && "opacity-20"}`}
                onClick={() => {
                  if (step > 1) setStep(step - 1);
                }}
              />
              {questions[step - 1]}
              <RightIcon
                className={`cursor-pointer ${
                  step === questions.length && "opacity-20"
                }`}
                onClick={() => {
                  if (step < questions.length) setStep(step + 1);
                }}
              />
            </div>
            {
              {
                1: (
                  <>
                    <input
                      type="text"
                      placeholder="Type your name"
                      className="rounded-3xl bg-white p-2 px-4 w-full text-primary placeholder:text-primary outline-none"
                    />
                  </>
                ),
                2: (
                  <>
                    <input
                      type="email"
                      placeholder="Type your email address"
                      className="rounded-3xl bg-white p-2 px-4 w-full text-primary placeholder:text-primary outline-none"
                    />
                  </>
                ),
              }[step]
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default Waitlist;
