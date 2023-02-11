import { Link } from 'react-router-dom';

import { Instagram, Twitter } from '~/assets/icons';
import { logoPng2 } from '~/assets/images';
import { Button } from '~/components/shared/Button';

function Footer() {
    return (
        <div className="relative font-Helvetica bg-bg-dark py-6 px-8">
            <Link to="/home" className="absolute brightness-0 invert">
                <img src={logoPng2} alt="logo" width={50} />
            </Link>
            {/* mobile screen */}
            <div className="md:hidden w-full flex flex-col text-center">
                <div className="flex flex-row items-center justify-end">
                    <a href="https://twitter.com/lofidotco" target="_blank">
                        <Twitter className="brightness-0 invert mr-2" />
                    </a>
                    <a href="https://www.instagram.com/lofi/" target="_blank">
                        <Instagram className="brightness-0 invert" />
                    </a>
                </div>
                <div className="flex items-center justify-center gap-4 mt-6 mb-4">
                    <Button type="unstyle-link" to="/home" className="text-base font-medium">
                        Home
                    </Button>
                    <Button type="unstyle-link" to="/home" className="text-base font-medium">
                        Features
                    </Button>
                    <Button type="unstyle-link" to="/home" className="text-base font-medium">
                        Artists
                    </Button>
                    <Button type="unstyle-link" to="/home" className="text-base font-medium">
                        Pricing
                    </Button>
                </div>
                <Button type="clear" onClick={() => window.open('mailto:hello@lifo.co', '_blank')}>
                    hello@lifo.co
                </Button>
                <p className="opacity-70 text-white">Copyright © 2022 Lofi.co</p>
            </div>
            {/* tablet sceen*/}
            <div className="hidden md:flex flex-col  w-full">
                <div className="grid grid-cols-12 mb-10 gap-2">
                    <div className="col-span-3"></div>
                    <div className="flex items-center justify-center gap-12 col-span-6">
                        <Button type="unstyle-link" to="/home" className="text-base font-semibold">
                            Contact
                        </Button>
                        <Button type="unstyle-link" to="/home" className="text-base font-semibold">
                            Features
                        </Button>
                        <Button type="unstyle-link" to="/home" className="text-base font-semibold">
                            Artists
                        </Button>
                        <Button type="unstyle-link" to="/home" className="text-base font-semibold">
                            Pricing
                        </Button>
                    </div>
                    <div className="flex justify-between items-center col-span-3">
                        <Button
                            type="clear"
                            onClick={() => window.open('mailto:hello@lifo.co', '_blank')}
                            className="p-0"
                        >
                            hello@lifo.co
                        </Button>
                        <div className="flex">
                            <Button href="https://twitter.com/lofidotco" className="p-0">
                                <Twitter className="brightness-0 invert" />
                            </Button>
                            <Button href="https://www.instagram.com/lofi/" className="p-0">
                                <Instagram className="brightness-0 invert" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12">
                    <p className="opacity-70 text-white col-span-3">Copyright © 2022 Lofi.co</p>
                    <div className="flex flex-row justify-center gap-4 col-span-6">
                        <p className="opacity-70 text-white">Terms of Service</p>
                        <p className="opacity-70 text-white">Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
