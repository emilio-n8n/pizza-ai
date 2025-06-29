import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" legacyBehavior>
      <a className="group">
        <div className="bg-accent-yellow px-6 py-3 rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105">
          <div className="relative">
            <span className="text-2xl font-bold uppercase tracking-[0.2em] text-light-white" style={{ fontFamily: "'Lilita One', cursive" }}>
              Pizza Ai
            </span>
            <span
              className="absolute -left-1 -bottom-1 text-2xl font-bold uppercase tracking-[0.2em] text-custom-grey -z-10"
              style={{ fontFamily: "'Lilita One', cursive" }}
            >
              Pizza Ai
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
