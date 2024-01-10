import { AiOutlineSearch } from "react-icons/ai";

export default function InputSearchBox({ placeHolder, onSearch }) {
  return (
    <div>
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <AiOutlineSearch
            className="h-4 w-4 text-gray-500 text-base font-medium"
            aria-hidden="true"
          />
        </div>
        <input
          type="text"
          name="text"
          id="text"
          onChange={(event) => onSearch(event.target.value)}
          className="block w-full font-medium rounded-md border-0 pl-10 text-gray-800 dark:bg-gray-100 placeholder:text-gray-500 placeholder:text-sm placeholder:font-medium sm:text-sm sm:leading-6 sm:min-w-[350px]"
          placeholder={placeHolder}
        />
      </div>
    </div>
  );
}
