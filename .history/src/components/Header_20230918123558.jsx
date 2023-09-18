import React from 'react';
import { GiMusicSpell } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <GiMusicSpell />
      </Link>
      <form>
        <input type="" />
        <button>
          <AiOutlineSearch />
        </button>
      </form>
      <button>로그인</button>
      <button>회원가입</button>
    </header>
  );
}
