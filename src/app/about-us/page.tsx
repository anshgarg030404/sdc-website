import SimpleGrow from "./icons";
import Become from "./become-mem";
import SocialMediaTransition from "../icons/page";
export default function aboutUs(){
    return(
        <>
            <div className="font-Raleway m-5 sm:m-10 lg:m-20 sm:px-10 px-2 space-y-10">
                <div className="space-y-6">
                    <h1 className="font-semibold text-2xl lg:text-4xl">About us</h1>
                    <p className="text-justify">Dedicated to propelling the university towards its vision of becoming a digitally dependent organization. Our department is entrusted with the crucial task of developing and implementing innovative software solutions that enhance the daily operations of both faculty and students. Selected from among the university's brightest minds, our students work on projects that streamline administrative tasks, improve academic management, and foster a more connected and efficient campus environment. By leveraging cutting-edge technology, we ensure that GGSIPU remains a leader in educational innovation, committed to improving the learning experience and operational efficiency across the university.</p>
                </div>

                <div className="flex justify-evenly  md:text-2xl align-middle ">
                    <Become/>
                     <SocialMediaTransition/>
                    
                </div>
            </div>
        </>
    )

}