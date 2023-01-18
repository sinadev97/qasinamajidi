import { FaCaretDown, FaPlus } from "react-icons/fa";

export const Header = ({ title }: { title?: string }) => {
  return (
    <header className="flex items-center justify-between px-14 py-4 bg-white shadow-light">
      <h1 className="font-extrabold text-2xl">{title}</h1>

      <div className="flex items-center gap-x-10">
        <button className="btn btn-primary">
          <FaPlus size={10} />
          <span>سوال جدید</span>
        </button>

        <div className="flex items-center gap-x-4">
          <div className="w-[44px] h-[44px] bg-gray-300 rounded-full"></div>

          <div className="text-sm">الناز شاکردوست</div>

          <FaCaretDown size={20} className="text-gray-300" />
        </div>
      </div>
    </header>
  );
};
