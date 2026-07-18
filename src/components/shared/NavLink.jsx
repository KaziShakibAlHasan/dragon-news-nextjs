"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({href, className,  children}) => {
    const pathName = usePathname();
    const isActive = pathName === href;
    return <Link className={`${isActive ? 'border-b-2 font-bold' : '' } ${className}` } href={href}>{children}</Link>
};

export default NavLink;