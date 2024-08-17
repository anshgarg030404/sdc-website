import SimpleGrow from "./icons";
import Become from "./become-mem";
import SocialMediaTransition from "../icons/page";
export default function AboutUs(){
    return(
        <>
              <div className="font-Raleway m-5 sm:m-10 lg:m-20 px-2 sm:px-10 space-y-10 text-white bg-black">
            {/* About Us Section */}
            <div className="space-y-8 mb-10 lg:mb-20">
                <h1 className="font-semibold text-3xl lg:text-4xl">About us</h1>
                <p className="text-justify text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                    Dedicated to propelling the university towards its vision of becoming a digitally dependent organization. Our department is entrusted with the crucial task of developing and implementing innovative software solutions that enhance the daily operations of both faculty and students. Selected from among the university's brightest minds, our students work on projects that streamline administrative tasks, improve academic management, and foster a more connected and efficient campus environment. By leveraging cutting-edge technology, we ensure that GGSIPU remains a leader in educational innovation, committed to improving the learning experience and operational efficiency across the university.
                </p>
            </div>

            
            <div className="flex flex-col md:flex-row justify-between items-center md:space-x-6 lg:space-x-4 md:text-lg lg:text-xl">
                
                <div className="flex flex-col items-center mb-5 md:mb-0">
                <div className="flex flex-col items-center space-y-4">
                        <Become />
                       
                    </div>
                </div>

            
                <div className="flex space-x-6">
                    <SocialMediaTransition />
                </div>
            </div>
        </div>
 
        </>
    )

}