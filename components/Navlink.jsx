import Link from 'next/link';

const NavLink = ({ href, title }) => {
  console.log(`NavLink - href: ${href}`);
  
  return (
    <Link legacyBehavior href={href}>
      <a className='block text-center py-2 pl-3 pr-4 text-3xl text-white sm:text-xl md:p-0 transition duration-300 ease-in border-b-2 border-transparent hover:border-[#d30000]'>{title}</a>
    </Link>
  );
};

export default NavLink;
