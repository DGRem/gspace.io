import GSpaceLogo from "../assets/LOGO.png";
import "../App.css"


export default function Footer() {
    return (
        <>
        <footer class="footer bg-black dark:bg-gray-900 border">
        <div class="mx-auto w-full">
            <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div className="logo">
                    <a href="/">
                        <img src={GSpaceLogo} alt="GSpaceLogo" className="logo w-1/4 mb-5" />
                    </a> 
                    <div className="logo-text">
                        <h1 className="md:text-xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-customBlue via-customBlue to-customLightGreen">Where Expectations Become Reality</h1>
                    </div>
                </div>
            <div>
                <h2 class="mb-6 font-bold uppercase text-white">Company</h2>
                <ul class="text-white font-medium">
                    <li class="mb-4">
                        <a href="#" class=" hover:underline">About</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Careers</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Brand Center</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Blog</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 font-bold uppercase text-white">Help center</h2>
                <ul class="text-white font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Discord Server</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Twitter</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Facebook</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 font-bold uppercase text-white">Legal</h2>
                <ul class="text-white font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Privacy Policy</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Licensing</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="px-4 py-6 bg-black border">
            <span class="block text-sm text-white sm:text-center">© 2023. All Rights Reserved.</span>
            </div>
        </div>
        </footer>

        </>
    )
};