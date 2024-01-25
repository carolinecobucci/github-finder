import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-4 left-4">
      <button
        onClick={() => navigate(-1)}
        className="border border-blue-200 bg-blue-200 rounded-lg py-2 px-4 text-sm font-semibold"
      >
        Voltar
      </button>
    </div>
  );
};

export default BackBtn;
