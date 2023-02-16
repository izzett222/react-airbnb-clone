import logo from "../assets/logo.svg";

export default function Header() {
    return (
        <header className="shadow-[rgba(0,_0,_0,_0.1)] h-[70px] shadow-md text-black flex items-center px-5">
            <img src={logo} alt="logo" />
        </header>
    )
}