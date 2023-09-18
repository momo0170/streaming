import React from 'react';
import { GiMusicSpell } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link>
        <GiMusicSpell />
      </Link>
      <form>
        <input type="" />
        <button>
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
