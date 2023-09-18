import React from 'react';
import { GiMusicSpell } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between p-2 border-b">
      <Link to="/" className="flex items-center">
        <GiMusicSpell size="40" color="#7c3aed" />
        <div className="text-violet-600 text-2xl ml-2 font-extrabold">
          Joy Music
        </div>
      </Link>
      <form className="flex transform translate-x-8">
        <input
          type="text"
          placeholder="검색"
          className="rounded-l-md border border-stone-400 p-1 px-2 focus:shadow-inner2 outline-none focus:border-violet-600 placeholder:text-sm hover:shadow-hoverInput hover:border-hoverInput w-80"
        />
        <button className="bg-gray-200 p-1 rounded-r-md box-border hover:bg-gray-300">
          <AiOutlineSearch size="30" />
        </button>
      </form>
      <div className="flex">
        <button className="bg-gray-200 mx-2 px-4 rounded-md text-sm font-semibold hover:bg-gray-300">
          로그인
        </button>
        <button className="bg-violet-600 text-white mx-2 px-4 rounded-md text-sm font-semibold hover:bg-violet-700">
          회원가입
        </button>
      </div>
    </header>
  );
}
