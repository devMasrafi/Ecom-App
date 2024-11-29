import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <main>
      <div className="flex bg-gray-400 py-1 px-3 rounded-md cursor-pointer">
        <input
          className="bg-gray-400 outline-none placeholder:text-white "
          type="text"
          placeholder="search products "
        />
        <label htmlFor="search">
          <CiSearch className="text-2xl text-white" />
        </label>
      </div>
    </main>
  );
};

export default SearchBar;
