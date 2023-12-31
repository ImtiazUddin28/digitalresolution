import { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: '322af689cd1996b48df72d462e8fd325a',
        popupWidget: true,
        automaticChatOpenOnNavigation: true
      };
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      var h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  return <></>;
};

export default ChatBot;
