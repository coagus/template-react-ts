import "./InputText.css";

interface InputTextProps {
  placeholder: string;
  type: string;
  onChange: (value: string) => void;
}

const InputText = ({ placeholder, type, onChange }: InputTextProps) => {
  return (
    <div className="input-text">
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputText;
