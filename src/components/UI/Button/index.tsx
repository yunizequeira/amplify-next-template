import Link from "next/link";

interface Props{
    text: string;
    link:string
    type:string;
}

const Buttom = ({text,link,type}:Props) => {
  return (
    <Link href={link}  className={type==="fill" ? "text-center font-semibold w-28 lg:w-44 bg-blue-700 border border-blue-700 rounded-md px-3 lg:px-6 py-3 text-white text-xs hover:bg-transparent transition-colors duration-300":" font-semibold w-28 lg:w-44 text-white text-xs border border-blue-700 rounded-md px-3 lg:px-6 py-3 text-center hover:bg-blue-700 transition-colors duration-300" }>
     <p>{text}</p> 
    </Link>
  );
}

export default Buttom;
