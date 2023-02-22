import { MdOutlineCreate, MdOutlineMoreVert } from "react-icons/md";
import { columnTable } from "../../../../../constants/columnTable";

const Table = () => {
    return (
        <div className=" flex flex-col mt-10 border">
            <div className="  flex text-[18px] my-5 mr-[18px] ml-auto">
                <MdOutlineCreate className="mr-[29px]" />
                <MdOutlineMoreVert />
            </div>
            <table className="">
                {columnTable.map((col) => {
                    return (
                        <th
                            key={col}
                            className="border text-[#AAAAAA] bg-[#F3F3F3] h-[62px] text-left align-middle pl-2"
                        >
                            {col}
                        </th>
                    );
                })}
            </table>
        </div>
    )
}

export default Table
