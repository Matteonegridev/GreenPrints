import axios from "axios";
import { easeIn, easeOut, motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import uuid4 from "uuid4";

const variantsMessage = {
  open: {
    y: ["-30%", 0],
    opacity: 1,
    transition: {
      duration: 0.5,
      easeIn,
    },
  },
  close: {
    y: "30%",
    opacity: 0,
    transition: {
      duration: 0.5,
      easeOut,
    },
  },
};

function FooterForm() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const clearInput = useRef<HTMLInputElement | null>(null);

  const formAction = async (formData: FormData) => {
    const formDataObj = Object.fromEntries(formData.entries());
    const id = uuid4();

    const payload = {
      id,
      email: formDataObj.email,
    };

    console.log("Form Data Submitted:", payload);

    try {
      const response = await axios.post("/api", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formAction(formData);
    if (clearInput.current) {
      clearInput.current.value = "";
      setIsSignedIn(true);
    }
    setTimeout(() => {
      setIsSignedIn(false);
    }, 3000);
  }, []);

  return (
    <div className="pt-5">
      <form
        className="flex flex-col items-center justify-center gap-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label
          className="-mb-2 font-body text-base font-bold text-gray-500 2xl:mb-0 2xl:text-xl"
          htmlFor="email"
        >
          Subscribe to our newsletter
        </label>
        <input
          ref={(el) => (clearInput.current = el)}
          className="rounded-md border-none px-4 py-2 font-body text-base text-clearDark caret-tertiary outline-none transition-all duration-200 ease-linear focus:shadow-lg 2xl:mb-3 2xl:w-full 2xl:py-3"
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
          required
          autoComplete="off"
        />
        <button
          className="rounded-sm bg-secondary px-[0.8em] py-[0.3em] font-body font-bold text-white shadow-sm transition-all duration-200 ease-in 2xl:w-[10rem] 2xl:text-xl 2xl:hover:bg-white 2xl:hover:text-secondary 2xl:hover:shadow-lg 2xl:active:shadow-sm"
          type="submit"
        >
          Sign In!
        </button>

        <motion.p
          initial="close"
          variants={variantsMessage}
          animate={isSignedIn ? "open" : "close"}
          className="font-subheading text-xl text-white 2xl:text-3xl"
        >
          Thanks for subscribing!
        </motion.p>
      </form>
    </div>
  );
}

export default FooterForm;
