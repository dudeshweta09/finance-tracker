'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePen,
  faIndianRupeeSign,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Dbcontroller from "@/components/db-controller";
import { useRouter } from "next/navigation";

export const ExpDisplay = ({ title, amount }: any) => {
  const dbController = new Dbcontroller();
  const router = useRouter();

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-4 bg-slate-600 rounded-3xl my-2">
        <div className="flex items-center gap-2">
          <div className="w-[20px] h-[20px] rounded-full bg-red-400" />
          <h4 className=" capitalize">{title}</h4>
        </div>
        <div className="flex items-center hover:bg-white w-20 rounded transition-all duration-500 mx-auto px-5 gap-2">
          <FontAwesomeIcon
            className="text-slate-600 hover:text-black transition-all duration-500"
            icon={faFilePen}
          />
          <FontAwesomeIcon
            onClick={() =>
              dbController.onDeleteExp(title, () => {
                dbController.getCurrentExistingExpense();
                router.push("/");
              })
            }
            className="text-slate-600 hover:text-black transition-all duration-500"
            icon={faTrashCan}
          />
        </div>
        <p className="">
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          {amount}
        </p>
      </div>
    </div>
  );
};

export const IncDisplay = ({ title, amount }: any) => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-4 bg-slate-600 rounded-3xl my-2">
        <div className="flex items-center gap-2">
          <div className="w-[20px] h-[20px] rounded-full bg-green-400" />
          <h4 className=" capitalize">{title}</h4>
        </div>
        <p>
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          {amount}
        </p>
      </div>
    </div>
  );
};
