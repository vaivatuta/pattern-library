import Link from "next/link";

const Button = ({ href, text, type, onClick }) => {
  const buttonClass = `mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0`;

  return (
    <>
      {href ? (
        href[0] !== "/" ? (
          <a href={href} className={buttonClass}>
            {text}
          </a>
        ) : (
          <Link to={href} className={buttonClass}>
            {text}
          </Link>
        )
      ) : (
        <button onClick={onClick} type={type} className={buttonClass}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
