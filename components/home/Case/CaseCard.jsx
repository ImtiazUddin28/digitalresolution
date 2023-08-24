import Image from "next/image";


const CaseCard = ({pic,title,text}) => {
    return (
        <div>
            <Image className="" src={pic} alt="case-picture" />
            <h3 className="text-[24px] font-semibold text-[#112231] my-3">{title}</h3>
            <p className="text-gray-500">{text}</p>
        </div>
    );
};

export default CaseCard;