import axios from "axios";
import uuid4 from "uuid4";

function FooterForm() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formAction(formData);
  };

  return (
    <div className="pt-5">
      <form
        className="flex flex-col items-center justify-center gap-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label className="-mb-2 font-body text-base" htmlFor="email">
          Subscribe to our newsletter
        </label>
        <input
          className="rounded-md border-none px-4 py-2 font-body text-inherit outline-none transition-all duration-200 ease-linear focus:shadow-lg"
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
        />
        <button
          className="rounded-md bg-secondary px-[0.8em] py-[0.3em] font-body font-bold text-white shadow-sm"
          type="submit"
        >
          Sign In!
        </button>
      </form>
    </div>
  );
}

export default FooterForm;
