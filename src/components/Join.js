import { FaDiscord, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import { useIsVisible } from "./useIsVisible";
import { useRef } from "react";

const Join = () => {
    const joinRef = useRef();
    const joinVisible = useIsVisible(joinRef);
    return (
        <>
            <div id="join" className={`${"h-auto mb-20 pt-10 w-full"}`}>
                <div className="mt-16 lg:px-20 md:px-10 sm:px-4 px-2 flex justify-center ">
                    <div ref={joinRef} className={`
                    ${"flex lg:h-[325px] min-h-[325px] sm:pb-0 pb-4 w-full bg-gradient-to-r from-blue-900 to-slate-900 rounded-about transition ease-in duration-500"}
                    ${joinVisible ? "scale-y-100" : "scale-y-0"}
                    `}>
                        <div className="xl:flex-1 xl:w-4/6 lg:w-4/6 md:w-5/6 w-full">
                            <div className="flex-1">
                                <p className="lg:ml-20 ml-10 mt-10 lg:text-[48px] md:text-[36px] text-[24px] subpixel-antialiased text-white">
                                    Join the community
                                </p>
                                <p className="text-white lg:ml-20 ml-10 mr-10 lg:mt-6 mt-4 antialiased">
                                Join the community Blinding Lights Project
                                </p>
                            </div>
                            <div className="flex-none flex flex-wrap bottom-0 items-center content-cneter justify-center lg:ml-20 md:ml-10 mt-6">
                                <a href="https://discord.gg/yRcMHhyhKT" target="_blank">
                                    <div className="flex md:h-14 h-12 w-auto px-4 mx-2 max-w-44 min-w-36 mt-3 text-white text-lg text-center border border-white relative rounded-full content-center justify-center items-center cursor-pointer transition duration-300 hover:-translate-y-0.5">
                                        <FaDiscord className="mr-2" /> Discord
                                    </div>
                                </a>
                                <a href="https://x.com/blindinglightsv" target="_blank">
                                    <div className="flex md:h-14 h-12 w-auto px-4 mx-2 max-w-44 min-w-36 mt-3 text-white text-lg text-center border border-white relative rounded-full content-center justify-center items-center cursor-pointer transition duration-300 hover:-translate-y-0.5">
                                        <FaXTwitter className="mr-2" />  Twitter
                                    </div>
                                </a>
                                <a href="https://www.youtube.com/@BlindingLights_Project" target="_blank">
                                    <div className="flex md:h-14 h-12 w-auto px-4 mx-2 max-w-44 min-w-36 mt-3 text-white text-lg text-center border border-white relative rounded-full content-center justify-center items-center cursor-pointer transition duration-300 hover:-translate-y-0.5">
                                        <FaYoutube className="mr-2" />Youtube
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="xl:flex-1 xl:-right-14 right-0 relative xl:w-2/6 lg:w-1/6 h-auto text-white content-center text-center items-center justify-center">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Join;