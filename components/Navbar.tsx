import Link from "next/link";
import Image from "next/image";

import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <Link href="/login">
          <CustomButton
            title="เข้าสู่ระบบ"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          />
        </Link>
      </nav>

    </header>
  )
}

export default Navbar;
