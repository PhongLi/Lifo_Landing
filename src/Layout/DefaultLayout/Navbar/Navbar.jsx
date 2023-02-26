import { Button } from '~/components/shared/Button';
import { MenuIcon } from '~/assets/icons';
import { logoGif } from '~/assets/images';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const appUrl = 'https://app-chillhop.onrender.com';

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex justify-between items-center px-2 md:px-4 mx-2 md:mx-4">
            <Link className="h-[80px] w-[80px] cursor-pointer" to="/home">
                <img
                    src={logoGif}
                    alt="logo"
                    className="h-full w-full object-cover invert scale-125 md:scale-150 md:mt-2"
                />
            </Link>
            <div className="relative">
                <div onClick={handleNav} className="cursor-pointer">
                    <MenuIcon className="md:hidden" />
                </div>
                {nav && (
                    // mobile screen
                    <div className="md:hidden absolute bg-[#212020] p-4 right-0  min-w-[180px] rounded-2xl">
                        <ul className="flex flex-col text-xl font-Helvetica w-full">
                            <li className="mb-2">
                                <Button type="unstyle-link" to="/contact">
                                    Contact
                                </Button>
                            </li>
                            <li className="mb-2">
                                <Button type="unstyle-link" to="/home">
                                    Updates
                                </Button>
                            </li>
                            <li className="mb-2">
                                <Button type="unstyle-link" to="/home">
                                    Music
                                </Button>
                            </li>
                            <li className="mb-2">
                                <Button type="unstyle-link" to="/home">
                                    FAQ
                                </Button>
                            </li>
                            <li className="mb-2">
                                <Button type="unstyle-link" to="/home">
                                    Pricing
                                </Button>
                            </li>
                            <li className="w-[176px]">
                                <Button type={'default'} href={appUrl} className="text-xl">
                                    Get started now
                                </Button>
                            </li>
                        </ul>
                    </div>
                )}
                {/* tablet screen */}
                <ul className="hidden md:flex flex-row items-center text-base font-Helvetica font-bold gap-5">
                    <li>
                        <Button type="unstyle-link" className="text-[#212020] font-bold text-base" to="/contact">
                            Contact
                        </Button>
                    </li>
                    <li>
                        <Button type="unstyle-link" className="text-[#212020] font-bold text-base" to="/home">
                            Updates
                        </Button>
                    </li>
                    <li>
                        <Button type="unstyle-link" className="text-[#212020] font-bold text-base" to="/home">
                            Music
                        </Button>
                    </li>
                    <li>
                        <Button type="unstyle-link" className="text-[#212020] font-bold text-base" to="/home">
                            FAQ
                        </Button>
                    </li>
                    <li>
                        <Button type="unstyle-link" className="text-[#212020] font-bold text-base" to="/home">
                            Pricing
                        </Button>
                    </li>
                    <li>
                        <Button type={'default'} href={appUrl} className="text-base px-8 py-2">
                            Get started now
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
