import React from 'react';
import whatsApp from '../../../assets/whatsapp.png'
import Image from 'next/image';


const ChatSystemWhatsApp = () => {
    
    return (
        <div className='fixed bottom-1/3 top-1/2 right-0 flex items-center justify-end z-[2]'>
            
            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER}`} target='_blank' rel="noreferrer">
                <Image className='w-[45px] h-[45px]' src={whatsApp} alt="whatsApp" />
            </a>
        </div>
    );
};

export default ChatSystemWhatsApp;