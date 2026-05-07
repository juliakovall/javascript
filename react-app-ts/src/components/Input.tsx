type InputProps = {
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ placeholder, type, onChange }: InputProps) {
  return <input type={type} placeholder={placeholder} onChange={onChange} />;
}

export default Input;
