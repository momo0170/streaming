import React from 'react';
import { GiMusicSpell } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
export default function Header() {
  return (
    <header>
      <GiMusicSpell />
      <form>
        <input type="" />
        <button>
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
