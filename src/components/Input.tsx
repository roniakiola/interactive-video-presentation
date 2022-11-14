type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};
export const InputField = (props: InputProps) => {
  const { type, name, placeholder, value, onChange, required } = props;
  return (
    <input
      className='input-field'
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required ? true : false}
    ></input>
  );
};
