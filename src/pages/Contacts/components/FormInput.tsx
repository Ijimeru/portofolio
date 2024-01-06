import { TFunction } from "i18next";
import { useState } from "react";
import { withTranslation } from "react-i18next";
interface FormInputPropsType {
  children: string;
  errors: [] | undefined;
  t: TFunction<"translation", undefined>;
}

const FormInput: React.FC<FormInputPropsType> = ({ children, errors, t }) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-y-4">
      <label htmlFor="fullname">{t(children)}</label>
      <input type="text" name={children.toLowerCase()} id={children.toLowerCase()} className="rounded-md border-primary-700" value={value} onChange={(e) => setValue(e.target.value)} />
      {errors ? <p className="text-red-600">*{errors}</p> : null}
    </div>
  );
};

export default withTranslation()(FormInput);
