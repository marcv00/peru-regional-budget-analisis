import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-transparent h-[4rem]">
            <div className="max-w-[1320px] mx-auto flex flex-col justify-between h-full">
                <nav className=" flex h-full items-center justify-between relative">
                    <div className="logo w-[20%]">
                        <Link href="/" className="text-2xl font-bold">
                            Peru en cifras
                        </Link>
                    </div>
                </nav>
                <div className="spacebar h-[2px] w-full bg-black"></div>
            </div>
        </header>
    );
}
