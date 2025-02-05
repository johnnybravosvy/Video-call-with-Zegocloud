import React, { useEffect, useRef } from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const VideoComp = () => {
    const { roomID } = useParams();

    const Api_key = import.meta.env.VITE_Zegoserver;

    const containerRef = useRef(null);

    useEffect(() => {
        let myMeeting = async (element) => {
            if (!roomID || !containerRef.current) return;

            // generate Kit Token
            const appID = 1013921251;
            const serverSecret = Api_key;
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Anonymous",);


            // Create instance object from Kit Token.
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            // start the call
            zp.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'Personal link',
                        url:
                            window.location.protocol + '//' +
                            window.location.host + window.location.pathname +
                            '?roomID=' +
                            roomID,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
                },
            });

        };
        myMeeting();

        return () => {
            // Clean up function
            if (containerRef.current) {
                containerRef.current.innerHTML = "";
            }
        }

    }, [roomID]);

    return (
        <div
            className="myCallContainer"
            ref={containerRef}
            style={{ width: '100vw', height: '100vh' }}
        ></div>
    );
}


export default VideoComp