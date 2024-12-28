import Image from 'next/image';
import { MdArrowOutward } from "react-icons/md";

const FirstContent = () => {
    return (
        <>
            <div id="home" className='w-full flex justify-center'>
                <div className='flex md:mt-20 mt-24 justify-center w-auto h-auto mx-4'>
                    <div className='xl:w-[1200px] lg:w-[1000px] w-full content-center text-center rounded-about text-white'>
                        <Image
                            src='/images/christmas_blp.png'
                            alt='blp-main-image'
                            width={0}
                            height={0}
                            loading="lazy"
                            sizes="200vw"
                            style={{ width: 'auto', height: 'auto' }}
                            className='border-[20px] border-red-900'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FirstContent;