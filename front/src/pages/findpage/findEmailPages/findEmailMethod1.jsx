import {FindSubmitButton, ToSmallButton} from "../../../components/Buttons";

export default function FindEmailMethod1 () {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <form className="flex flex-col  items-center w-[30rem] h-[50rem] shadow-xss rounded-[2rem] bg-[#F6F8FA]">
                <div className='flex justify-between items-center w-[100%] px-[40px] mt-[20px] mb-[100px]'>
                    <span className="font-bold text-black text-[24px]">
                        MarbleUs
                    </span>
                    <div className='flex gap-[8px]'>
                        <ToSmallButton linkName='mainpage' Size='sm' iconName='mainpage' colorName='orange' title='mainpage'/>
                        <ToSmallButton linkName='loginpage' Size='sm' iconName='loginpage' colorName='blue' title='loginpage'/>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center font-semibold text-gray-800">
                    <div className="text-[30px]">
                        이메일 찾기 방법 1
                    </div>
                    <div className="text-[20px] mb-[60px]">
                        ( Find Your E-mail )
                    </div>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col justify-center">
                        <label htmlFor="email" className="font-medium text-[20px] block mb-[7px]">
                            입력 1
                        </label>
                        <input type="email" name="email" placeholder="example@example.com" className=" w-[100%] h-[50px] bg-white text-[#6C6C6C] text-[18px] border-2 border-[#D7D7D7] rounded-[10px] pl-[14px]">
                        </input> 
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="email" className="font-medium text-[20px] block mb-[7px]">
                            입력 2
                        </label>
                        <input type="email" name="email" placeholder="example@example.com" className=" w-[100%] h-[50px] bg-white text-[#6C6C6C] text-[18px] border-2 border-[#D7D7D7] rounded-[10px] pl-[14px]">
                        </input> 
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="email" className="font-medium text-[20px] block mb-[7px]">
                            입력 3
                        </label>
                        <input type="email" name="email" placeholder="example@example.com" className=" w-[100%] h-[50px] bg-white text-[#6C6C6C] text-[18px] border-2 border-[#D7D7D7] rounded-[10px] pl-[14px]">
                        </input> 
                    </div>
                    <FindSubmitButton text='Submit' />
                </div>
                <footer className="text-gray-600 relative bottom-[-30px]">
                    <i class="fa-regular fa-copyright"></i> MarbleUs Corp. All rights reserved.
                </footer>
            </form>
        </div>
    )
};