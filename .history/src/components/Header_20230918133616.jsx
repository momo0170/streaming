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
      <form>
        <input type="text" />
        <button>
          <AiOutlineSearch />
        </button>
      </form>
      <div className="flex">
        <button>로그인</button>
        <button className="bg-sky-400 text-white">회원가입</button>
      </div>
    </header>
  );
}
