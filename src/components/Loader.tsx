import { CgSpinner } from "react-icons/cg";

const Loader = () => {
  return (
    <div className="flex justify-center mt-10 animate-spin">
      <CgSpinner size={30} />
    </div>
  );
};

export default Loader;
