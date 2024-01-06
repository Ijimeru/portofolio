import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import FormInput from "./FormInput";

const ContactForm = () => {
  const [errors, setError] = useState<{ fullname: []; email: []; message: [] }>();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const response = new Promise((resolve, reject) => {
      return fetch("/api/send-message/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: e.target.fullname.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
        .then((res) => {
          if (res.status == 201) {
            e.target.reset();
            resolve(res);
          } else {
            reject(res.statusText);
            return res.json();
          }
        })
        .then((data) => setError(data))
        .catch((e) => reject(e));
    });
    toast.promise(response, {
      pending: "Sending.....",
      success: `The message has been sent`,
      error: {
        render(data: any) {
          return <div>{data.data}</div>;
        },
      },
    });
  };
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit} className="border p-5 rounded-md text-primary-700 border-primary-800">
      <h2 className="text-2xl mb-12">{t("Contactme")}</h2>
      <div className="flex flex-col gap-y-4">
        <FormInput errors={errors?.fullname}>Fullname</FormInput>
        <FormInput errors={errors?.email}>Email</FormInput>
        <FormInput errors={errors?.message}>Message</FormInput>
      </div>
      <button type="submit" className="mt-12 bg-primary-100 px-4 py-2 rounded-md text-primary-700 hover:bg-white hover:border-primary-400 border transition-all duration-300">
        {t("Send")}
      </button>
    </form>
  );
};

export default ContactForm;
