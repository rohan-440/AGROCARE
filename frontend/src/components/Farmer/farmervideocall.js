import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from '../../secrets';
import SideBar from './SideBar';

function FarmerVideoCall() {
    const roomID = "Expert";
    const meetingRef = useRef(null);

    useEffect(() => {
        const myMeeting = async () => {
            // Generate Kit Token
            const appID = APP_ID;
            const serverSecret = SERVER_SECRET;
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Expertwithfarmer");

            // Create instance object from Kit Token.
            const zp = ZegoUIKitPrebuilt.create(kitToken);

            // Start the call
            zp.joinRoom({
                container: meetingRef.current,
                sharedLinks: [
                    {
                        name: 'Personal link',
                        url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
                },
            });
        };

        myMeeting();
    }, [roomID]);

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <SideBar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Video Call</h5>
                        <div className="card-body">
                            <div ref={meetingRef} style={{ width: '100%', height: '500px' }}></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default FarmerVideoCall;
