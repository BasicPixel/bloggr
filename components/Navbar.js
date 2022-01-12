import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-4 flex items-center gap-4 fixed top-0 bg-nord0 w-full h-16">
      <Link href="/">
        <a className="text-2xl pb-1">bloggr</a>
      </Link>
      <Link href="/create">
        <a className="hover:bg-nord3 p-2 rounded hover:transition-all duration-300">
          Create Post
        </a>
      </Link>
      <Link href="/about">
        <a className="hover:bg-nord3 p-2 rounded hover:transition-all duration-300">
          About
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
