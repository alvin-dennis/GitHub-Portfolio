// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © GitHub Portfolio by <Link target="_blank" href="https://github.com/alvin-dennis/" className="text-primary-icon">ALVIN</Link>
          </p>
          <a href="https://alvindennis.vercel.app/" className="flex items-center gap-2">
          <button className="bg-primary-icon text-black py-2 px-4 rounded-md hover:bg-primary-icon-hover">Go Back Home</button></a>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/alvin-dennis/GitHub-Portfolio"
              className="flex items-center gap-2 uppercase hover:text-primary-icon"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/alvin-dennis/GitHub-Portfolio/fork"
              className="flex items-center gap-2 uppercase hover:text-primary-icon"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;