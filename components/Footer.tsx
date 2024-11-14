import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col items-start justify-start gap-6">
          <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain"/>
          <p className="text-gray-700 text-base">CarsHub 2024<br/> All rights reserved &copy;</p>

          
        </div>

        <div className="footer__links">
          links
        </div>

      </div>
      <div className="items-center flex justify-between flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p className="a">@2024 CursHub all rights resirved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">Privacy Policy</Link>
          <Link href="/" className="text-gray-500">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  )
}