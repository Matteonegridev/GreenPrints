import axios from "axios";
import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import uuid4 from "uuid4";

const variantsMessage = {
  open: {
    y: ["-30%", 0],
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  close: {
    y: "40%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const variantsInvalid = {
  hidden: {},
  visible: {
    opacity: [0, 1, 0],
    transition: {
      duration: 1,
      repeat: 3,
      ease: "linear",
    },
  },
};

function FooterForm() {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>("");
  const emailInput = useRef<HTMLInputElement | null>(null);
  const { t } = useTranslation("footer");

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

  // Email Validation:
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);
      const email = emailInput.current?.value || "";

      // Se mail non valida:
      if (!validateEmail(email)) {
        setMessage(t("invalid"));
        setIsEmailValid(false);

        // Fa scomparire il messaggio di errore dopo 3 secondi:
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        return;
      }
      // Se email valida crea il formData, fa scattare il messaggio di ringraziamento, messaggio di errore tolto:
      setIsEmailValid(true);
      setMessage(null);
      formAction(formData);

      // Svuota input:
      if (emailInput.current) {
        emailInput.current.value = "";
      }

      setTimeout(() => {
        setIsEmailValid(false);
      }, 3000);
    },
    [t],
  );

  return (
    <div className="pt-5 xl:pt-10 2xl:m-auto 2xl:w-2/4">
      <form
        className="flex flex-col items-center justify-center gap-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label
          className="-mb-2 font-body text-base font-bold text-gray-500 2xl:mb-0 2xl:text-2xl"
          htmlFor="email"
        >
          {t("sub")}
        </label>
        <input
          ref={(el) => (emailInput.current = el)}
          className="rounded-sm border-none px-4 py-2 font-body text-base text-clearDark caret-tertiary outline-none transition-all duration-300 ease-in-out focus-within:shadow-lg 2xl:w-2/4 2xl:py-3"
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
          required
          autoComplete="off"
        />
        {!isEmailValid && (
          <motion.p
            variants={variantsInvalid}
            initial="hidden"
            animate={message ? "visible" : "hidden"}
            exit="hidden"
            className="font-body text-sm text-tertiary xl:text-base"
          >
            {message}
          </motion.p>
        )}
        <button
          className="w-[12rem] rounded-sm bg-secondary px-[0.8em] py-[0.4em] font-body font-bold text-white shadow-sm transition-all duration-200 ease-in 2xl:text-xl 2xl:hover:bg-white 2xl:hover:text-secondary 2xl:hover:shadow-lg 2xl:active:shadow-sm"
          type="submit"
        >
          {t("signIn")}
        </button>
        <motion.div
          initial="close"
          variants={variantsMessage}
          animate={isEmailValid ? "open" : "close"}
        >
          <p className="font-subheading text-xl text-white 2xl:text-3xl">
            {t("thanks")}
          </p>
        </motion.div>
      </form>
    </div>
  );
}

export default FooterForm;
