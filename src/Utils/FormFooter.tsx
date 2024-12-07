import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import uuid4 from "uuid4";
import { z, ZodType } from "zod";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0, 1, 0],
    transition: {
      duration: 1,
      repeat: 3,
      ease: "linear",
    },
  },
};

type FormData = {
  email: string;
};

function FooterForm() {
  const [message, setMessage] = useState<string | null>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  const { t } = useTranslation("footer");

  const formSchema: ZodType<FormData> = z.object({
    email: z
      .string()
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
  });

  const submitData = async (formData: FormData) => {
    const id = uuid4();

    const payload = {
      id,
      formData,
    };

    try {
      const response = await axios.post("/api", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response data:", response.data);

      return response.data;
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleValidSubmit = async (data: FormData) => {
    console.log("onSubmit called");
    await submitData(data);
    setIsEmailValid(true);
    setTimeout(() => {
      setIsEmailValid(false);
    }, 3000);
    reset();
  };

  const handleInvalidSubmit = (errors: FieldErrors<FormData>) => {
    console.log("Validation failed:", errors);
    setMessage(t("invalid"));
    setIsEmailValid(false);
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="pt-5 xl:pt-10 2xl:m-auto 2xl:w-2/4">
      <form
        onSubmit={handleSubmit(handleValidSubmit, handleInvalidSubmit)}
        className="flex flex-col items-center justify-center gap-5"
      >
        <label
          className="-mb-2 font-body text-base font-bold text-gray-500 2xl:mb-0 2xl:text-2xl"
          htmlFor="email"
        >
          {t("sub")}
        </label>
        <input
          className="rounded-sm border-none px-4 py-2 font-body text-base text-clearDark caret-tertiary outline-none transition-all duration-300 ease-in-out focus-within:shadow-lg 2xl:w-2/4 2xl:py-3"
          type="email"
          id="email"
          placeholder="email@example.com"
          required
          autoComplete="off"
          {...register("email")}
        />
        {errors.email && message && (
          <motion.p
            variants={variantsInvalid}
            initial="hidden"
            animate={message ? "visible" : "hidden"}
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
