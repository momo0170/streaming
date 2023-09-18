import React from 'react';
import { GiMusicSpell } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between m-2">
      <Link to="/">
        <GiMusicSpell size="40" color="#7c3aed" />
      </Link>
      <form className="flex">
        <input
          type="text"
          placeholder="검색"
          className="rounded-l-md border p-1 px-2 focus:shadow-inner2 outline-none focus:border-violet-600"
        />
        <button className="bg-gray-200 p-1 rounded-r-md box-border">
          <AiOutlineSearch size="30" />
        </button>
      </form>
      <div className="flex">
        <button className="bg-gray-200 mx-2 px-2 rounded-md text-sm font-semibold">
          로그인
        </button>
        <button className="bg-violet-600 text-white mx-2 px-2 rounded-md text-sm font-semibold">
          회원가입
        </button>
      </div>
    </header>
  );
}
