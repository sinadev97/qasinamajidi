import loaderGif from "../assets/images/loader.gif";
import Portal from "./Portal";
const Loader = () => {
  return (
    <Portal>
      <div className="h-full w-full inset-0 fixed bg-black/5 flex items-center justify-center z-10">
        <img src={loaderGif} alt="" />
      </div>
    </Portal>
  );
};

export default Loader;
