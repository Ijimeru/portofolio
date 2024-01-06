import { TFunction } from "i18next";
import { withTranslation } from "react-i18next";
interface FormInputPropsType {
  children: string;
  errors: [] | undefined;
  t: TFunction<"translation", undefined>;
}

const FormInput: React.FC<FormInputPropsType> = ({ children, errors, t }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <label htmlFor="fullname">{t(children)}</label>
      <input type="text" name="fullname" id="fullname" className="rounded-md border-primary-700" />
      {errors ? <p className="text-red-600">*{errors}</p> : null}
    </div>
  );
};

export default withTranslation()(FormInput);
