import Image from "next/image";
import Link from "next/link";

const LogoLink = () => {
  return (
    <Link href={"/"} className="h-full py-2">
      <Image
        src="/MoretureLogo.png"
        width={95}
        height={95}
        alt="moreture logo"
        className="h-full w-auto object-contain"
        priority
      />
    </Link>
  );
};

export default LogoLink;
