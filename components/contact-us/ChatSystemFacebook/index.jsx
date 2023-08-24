import React from 'react';
import { CustomChat, FacebookProvider } from 'react-facebook';

const ChatSystemFacebook = () => {
    
    return (
        <div>
            <FacebookProvider appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID} chatSupport>
                <CustomChat pageId={process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID} minimized={true} />
            </FacebookProvider>
        </div>
    );
};

export default ChatSystemFacebook;