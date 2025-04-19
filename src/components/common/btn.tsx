interface IButtonProps {
  btnClass: string | undefined;
  name: string | undefined;
  onClick?: () => void;
  type?: string;
}

const Button: React.FC<IButtonProps> = ({ btnClass, name }) => {
  return <button className={`btn ${btnClass} color3`} type="button">{name}</button>;
};

export default Button;
