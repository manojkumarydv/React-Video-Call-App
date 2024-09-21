import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';


const Room = () => {

    const {roomId} = useParams()
    let myMeeting = async(element)=>{
        const appID = 1344187230;
        const serverSecret = "0088fdaf3103fadfb57457gbdfs3t43";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString(), "manoj");

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'Copy link',
                url:`http://localhost:3000/room/${roomId}`
              },
            ],
            scenario: {
             mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
       });
        
    }
  return (
    <div ref={myMeeting}>
     
    </div>
  )
}

export default Room
