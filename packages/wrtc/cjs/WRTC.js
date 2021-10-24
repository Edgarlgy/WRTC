"use strict";function e(e,t=(()=>{})){t()}function t(e,t){var i=(new Date).getTime();return function(){var n=(new Date).getTime();n-i>=t&&(i=n,e.apply(null,arguments))}}class i{constructor(e){const{dataChanel:t,whiteboardId:i}=e;this.dataChanel=t,this.drawing=!1,this.whiteboard=document.getElementById(i),this.whiteboardContext=this.whiteboard.getContext("2d"),this.current={color:"red"}}onMouseDown=e=>{this.drawing=!0,this.current.x=e.clientX||e.touches[0].clientX,this.current.y=e.clientY||e.touches[0].clientY};onMouseUp=e=>{this.drawing&&(this.drawing=!1,this.drawLine(this.current.x,this.current.y,e.clientX||e.touches[0].clientX,e.clientY||e.touches[0].clientY,this.current.color,!0))};onMouseMove=e=>{this.drawing&&(this.drawLine(this.current.x,this.current.y,e.clientX||e.touches[0].clientX,e.clientY||e.touches[0].clientY,this.current.color,!0),this.current.x=e.clientX||e.touches[0].clientX,this.current.y=e.clientY||e.touches[0].clientY)};drawLine=(e,t,i,n,o,s)=>{if(this.whiteboardContext.beginPath(),this.whiteboardContext.moveTo(e-this.whiteboard.offsetLeft,t-this.whiteboard.offsetTop),this.whiteboardContext.lineTo(i-this.whiteboard.offsetLeft,n-this.whiteboard.offsetTop),this.whiteboardContext.strokeStyle=o,this.whiteboardContext.lineWidth=2,this.whiteboardContext.stroke(),this.whiteboardContext.closePath(),s){var a=this.whiteboard.width,r=this.whiteboard.height;this.dataChanel&&this.dataChanel.send(JSON.stringify({type:"whiteboard",data:{x0:e/a,y0:t/r,x1:i/a,y1:n/r,color:o}}))}};toggleWhiteboard=()=>{var e,i;"none"===this.whiteboard.style.display?((e=this.whiteboard).style.opacity=0,e.style.display=i||"block",function t(){var i=parseFloat(e.style.opacity);(i+=.1)>1||(e.style.opacity=i,requestAnimationFrame(t))}(),this.whiteboard.addEventListener("mousedown",this.onMouseDown,!1),this.whiteboard.addEventListener("mouseup",this.onMouseUp,!1),this.whiteboard.addEventListener("mouseout",this.onMouseUp,!1),this.whiteboard.addEventListener("mousemove",t(this.onMouseMove,10),!1),this.whiteboard.addEventListener("touchstart",this.onMouseDown,!1),this.whiteboard.addEventListener("touchend",this.onMouseUp,!1),this.whiteboard.addEventListener("touchcancel",this.onMouseUp,!1),this.whiteboard.addEventListener("touchmove",t(this.onMouseMove,10),!1)):(this.whiteboard.removeEventListener("mousedown",this.onMouseDown,!1),this.whiteboard.removeEventListener("mouseup",this.onMouseUp,!1),this.whiteboard.removeEventListener("mouseout",this.onMouseUp,!1),this.whiteboard.removeEventListener("mousemove",t(this.onMouseMove,10),!1),this.whiteboard.removeEventListener("touchstart",this.onMouseDown,!1),this.whiteboard.removeEventListener("touchend",this.onMouseUp,!1),this.whiteboard.removeEventListener("touchcancel",this.onMouseUp,!1),this.whiteboard.removeEventListener("touchmove",t(this.onMouseMove,10),!1),fadeOut(this.whiteboard))}}var n=null;try{var o="undefined"!=typeof module&&"function"==typeof module.require&&module.require("worker_threads")||"function"==typeof __non_webpack_require__&&__non_webpack_require__("worker_threads")||"function"==typeof require&&require("worker_threads");n=o.Worker}catch(e){}function s(e,t,i){var o=void 0===t?null:t,s=function(e,t){return Buffer.from(e,"base64").toString(t?"utf16":"utf8")}(e,void 0!==i&&i),a=s.indexOf("\n",10)+1,r=s.substring(a)+(o?"//# sourceMappingURL="+o:"");return function(e){return new n(r,Object.assign({},e,{eval:!0}))}}function a(e,t,i){var n=void 0===t?null:t,o=function(e,t){var i=atob(e);if(t){for(var n=new Uint8Array(i.length),o=0,s=i.length;o<s;++o)n[o]=i.charCodeAt(o);return String.fromCharCode.apply(null,new Uint16Array(n.buffer))}return i}(e,void 0!==i&&i),s=o.indexOf("\n",10)+1,a=o.substring(s)+(n?"//# sourceMappingURL="+n:""),r=new Blob([a],{type:"application/javascript"});return URL.createObjectURL(r)}var r="[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0);var c,h,d,l=(c="Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7aW1wb3J0U2NyaXB0cygiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9AdGVuc29yZmxvdy90ZmpzQDEuMiIsImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQHRlbnNvcmZsb3ctbW9kZWxzL2JvZHktcGl4QDIuMCIpO2xldCBlPW51bGwsdD1udWxsLGE9bnVsbCxpPW51bGwsbz1udWxsLHM9bnVsbDsoYXN5bmMoKT0+e2U9YXdhaXQgYm9keVBpeC5sb2FkKHthcmNoaXRlY3R1cmU6Ik1vYmlsZU5ldFYxIixvdXRwdXRTdHJpZGU6MTYsbXVsdGlwbGllcjouNzUscXVhbnRCeXRlczoyfSksc2VsZi5wb3N0TWVzc2FnZSh7dHlwZToiaW5pdCJ9KX0pKCksc2VsZi5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwoYXN5bmMgbj0+e2NvbnN0IGw9bi5kYXRhO3N3aXRjaChsLnR5cGUpe2Nhc2Uib2ZmQ2FudmFzIjphPWwuY2FudmFzLGk9YS5nZXRDb250ZXh0KCIyZCIpLG89bmV3IE9mZnNjcmVlbkNhbnZhcyhhLndpZHRoLGEuaGVpZ2h0KSxzPW8uZ2V0Q29udGV4dCgiMmQiKTticmVhaztjYXNlIm1hc2tJbWciOnQ9bC5tYXNrSW1nQml0bWFwO2JyZWFrO2Nhc2UidmlkZW9CaXRNYXAiOmlmKG51bGw9PT1pfHxudWxsPT09ZXx8bnVsbD09PXQpYnJlYWs7Y29uc3Qgbj1sLmJpdE1hcDtzLmRyYXdJbWFnZShuLDAsMCxuLndpZHRoLG4uaGVpZ2h0LDAsMCxhLndpZHRoLGEuaGVpZ2h0KTtjb25zdCByPWF3YWl0IGUuc2VnbWVudFBlcnNvbihzLmdldEltYWdlRGF0YSgwLDAsYS53aWR0aCxhLmhlaWdodCkse2ludGVybmFsUmVzb2x1dGlvbjoibWVkaXVtIixzZWdtZW50YXRpb25UaHJlc2hvbGQ6LjcsbWF4RGV0ZWN0aW9uczozLHNjb3JlVGhyZXNob2xkOi4zLG5tc1JhZGl1czoyMH0pLGQ9e3I6MCxnOjAsYjowLGE6MH0saD17cjowLGc6MCxiOjAsYToyNTV9LGc9Ym9keVBpeC50b01hc2socixkLGgpO2lmKCFnKXJldHVybiB2b2lkIGkuZHJhd0ltYWdlKG8sMCwwKTsicmVwbGFjZSI9PT1sLm1vZGU/KGkucHV0SW1hZ2VEYXRhKGcsMCwwKSxpLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbj0ic291cmNlLWluIixpLmRyYXdJbWFnZSh0LDAsMCx0LndpZHRoLHQuaGVpZ2h0LDAsMCxhLndpZHRoLGEuaGVpZ2h0KSxpLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbj0iZGVzdGluYXRpb24tb3ZlciIsaS5kcmF3SW1hZ2UobiwwLDAsbi53aWR0aCxuLmhlaWdodCwwLDAsYS53aWR0aCxhLmhlaWdodCksaS5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249InNvdXJjZS1vdmVyIik6InZpcnR1YWwiPT09bC5tb2RlJiYoaS5wdXRJbWFnZURhdGEoZywwLDApLGkuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPSJzb3VyY2UtaW4iLGkuZmlsdGVyPSJibHVyKDEwcHgpIixpLmRyYXdJbWFnZShvLDAsMCksaS5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249ImRlc3RpbmF0aW9uLW92ZXIiLGkuZmlsdGVyPSJibHVyKDBweCkiLGkuZHJhd0ltYWdlKG4sMCwwLG4ud2lkdGgsbi5oZWlnaHQsMCwwLGEud2lkdGgsYS5oZWlnaHQpLGkuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPSJzb3VyY2Utb3ZlciIpLHNlbGYucG9zdE1lc3NhZ2Uoe3R5cGU6InN1Y2Nlc3MifSl9fSkpfSgpOwoK",h=null,d=!1,r?s(c,h,d):function(e,t,i){var n;return function(o){return n=n||a(e,t,i),new Worker(n,o)}}(c,h,d));class m{constructor(e){const{localVideo:t,maskImg:i,webcamStream:n,backgroundCanvasId:o,mode:s}=e,[a]=n.getVideoTracks();this.localVideo=t,this.localImageCapture=new ImageCapture(a),this.maskImg=i,this.worker=null,this.canvas=document.getElementById(o),this.canvas.width=this.localVideo.clientWidth,this.canvas.height=this.localVideo.clientHeight,this.stream=this.canvas.captureStream(),this.state="active",this.mode=s,this.initWorker()}checkSupported=()=>!!this.canvas.transferControlToOffscreen;initWorker=()=>{this.checkSupported()&&(this.worker||(this.worker=new l,this.initListener()),this.transOffscreen(),this.transMaskImg())};transOffscreen=()=>{const e=this.canvas.transferControlToOffscreen();this.worker.postMessage({type:"offCanvas",canvas:e},[e])};transMaskImg=()=>{createImageBitmap(this.maskImg).then((e=>{this.worker.postMessage({type:"maskImg",maskImgBitmap:e},[e]),this.renderCanvasImg()}))};renderCanvasImg=async()=>{await this.localImageCapture.grabFrame().then((e=>{this.worker.postMessage({type:"videoBitMap",bitMap:e,mode:this.mode},[e])}))};handleMessage=e=>{const t=e.data,{type:i=""}=t;"init"===i?this.renderCanvasImg():"success"===i&&(this.localVideo.style.display="none",this.canvas.style.display="block",this.renderCanvasImg())};initListener=()=>{this.worker.addEventListener("message",this.handleMessage)};stop=()=>{this.worker.removeEventListener("message",this.handleMessage),this.localVideo.style.display="block",this.canvas.style.display="none",this.state="inactive"};restart=()=>{this.initListener(),this.renderCanvasImg(),this.state="active"}}m.prototype.onSuccess=()=>{},m.prototype.onInit=()=>{};class u{constructor(e){const{stream:t,recorderOptions:i={mimeType:"video/webm;codecs=vp8,opus"}}=e;this.recorderOptions=i,this.mediaRecorder=new MediaRecorder(t,i),this.chunks=[],this.mediaRecorder.ondataavailable=e=>{this.chunks.push(e.data)},this.timeslice=1e3}start=e=>(this.timeslice=e,this.mediaRecorder.start(e));stop=()=>(this.mediaRecorder.stop(),new Blob(this.chunks,{type:"video/webm;codecs=vp8,opus"}))}class b{constructor(e){this.RTCPeerConnection=null,this.DataChanel=null,this.WHITEBOARD=null,this.BackgroundReplacement=null,this.Recorder=null,this.webcamStream=null,this.remoteStream=null,this.videoEnabled=!0,this.audioEnabled=!0,this.mode="camera";const{localVideoId:t="localVideo",remoteVideoId:i="remoteVideo",whiteboardId:n="whiteboard",backgroundCanvasId:o="localCanvas",iceServers:s=[],socket:a,room:r=location.href,mediaConstraint:c={video:!0,audio:!0},maskImg:h}=e;this.localVideo=document.getElementById(t),this.remoteVideo=document.getElementById(i),this.iceServers=s,this.socket=a,this.room=r,this.mediaConstraint=c,this.whiteboardId=n,this.maskImg=h,this.backgroundCanvasId=o,this.receivedBuffer=[],this.receivedSize=0,this.fileSize=0,this.fileName="",a.on("ready",this.invite),a.on("offer",this.onOffer),a.on("answer",this.onAnswer),a.on("icecandidate",this.onIceCandidata),this.getUserMedia().then((()=>{this.room,this.socket.emit("join",this.room)}))}createPeerConnection=()=>{this.RTCPeerConnection=new RTCPeerConnection({iceServers:this.iceServers}),this.RTCPeerConnection.onconnectionstatechange=this.handleConnectionStateChange,this.RTCPeerConnection.onicecandidateerror=e,this.RTCPeerConnection.onicecandidate=this.handleICECandidateEvent,this.RTCPeerConnection.oniceconnectionstatechange=this.handleICEConnectionStateChange,this.RTCPeerConnection.onicegatheringstatechange=this.handleICEGatheringStateChange,this.RTCPeerConnection.onsignalingstatechange=this.handleSignalingStateChange,this.RTCPeerConnection.onnegotiationneeded=this.handleNegotiationNeededEvent,this.RTCPeerConnection.ontrack=this.handleTrackEvent,this.DataChanel=this.RTCPeerConnection.createDataChannel("chat",{negotiated:!0,id:0,ordered:!0,maxRetransmits:30}),this.DataChanel.onopen=e=>{},this.DataChanel.onmessage=e=>{if(e.data instanceof Blob||e.data instanceof ArrayBuffer){if(this.receivedBuffer.push(e.data),this.receivedSize+=e.data.byteLength||e.data.size,this.receivedSize===this.fileSize){const e=new Blob(this.receivedBuffer,{type:"application/octet-stream"});this.onRecieveFile({url:URL.createObjectURL(e),fileName:this.fileName,fileSize:this.fileSize}),this.receivedBuffer=[],this.receivedSize=0,this.fileSize=0,this.fileName=""}return}const t=JSON.parse(e.data),i=t.type,n=t.data;"whiteboard"===i?this.handleRecieveWhiteboard(n):"file"===i?(this.fileName=t.fileName,this.fileSize=t.fileSize):this.onRecieveMessage(n)},this.WHITEBOARD=new i({dataChanel:this.DataChanel,whiteboardId:this.whiteboardId})};record=e=>{this.remoteStream&&(this.Recorder=new u({stream:this.remoteStream}),this.Recorder.start(e))};stopRecord=()=>{const e=this.Recorder.stop(),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="录制文件",t.click(),this.Recorder=null};invite=()=>{this.createPeerConnection();try{this.webcamStream.getTracks().forEach((e=>this.RTCPeerConnection.addTrack(e,this.webcamStream)))}catch(t){e()}};getUserMedia=async()=>{try{return this.webcamStream=await navigator.mediaDevices.getUserMedia(this.mediaConstraint),this.localVideo.srcObject=this.webcamStream,this.onGetUserMedia(),this.webcamStream}catch(t){this.onGetUserMediaError(),e()}};getDisplayMedia=async()=>{try{return this.webcamStream=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!1}),this.localVideo.srcObject=this.webcamStream,this.onGetDisplayMedia(),this.webcamStream}catch(t){this.onGetDisplayMediaError(),e()}};handleNegotiationNeededEvent=async()=>{try{if("stable"!=this.RTCPeerConnection.signalingState)return;await this.RTCPeerConnection.setLocalDescription(),this.socket.emit("offer",this.RTCPeerConnection.localDescription,this.room)}catch(t){e()}};handleConnectionStateChange=()=>{switch(this.RTCPeerConnection.connectionState,this.RTCPeerConnection.connectionState){case"connected":const e=this.RTCPeerConnection.getConfiguration();JSON.stringify(e),this.BackgroundReplacement&&this.switchStream(this.BackgroundReplacement.stream);break;case"disconnected":break;case"failed":this.RTCPeerConnection.restartIce(),setTimeout((()=>{"connected"!==this.RTCPeerConnection.iceConnectionState&&this.invite()}),1e4)}};handleTrackEvent=e=>{this.remoteVideo.srcObject=e.streams[0],this.remoteStream=e.streams[0],this.onTrack(e)};handleICECandidateEvent=e=>{e.candidate&&(e.candidate.candidate,this.socket.emit("icecandidate",e.candidate,this.room))};handleICEConnectionStateChange=e=>{this.RTCPeerConnection.iceConnectionState};handleSignalingStateChange=e=>{if(this.RTCPeerConnection.signalingState,"closed"===this.RTCPeerConnection.signalingState)this.invite()};handleICEGatheringStateChange=e=>{this.RTCPeerConnection.iceGatheringState};onOffer=async e=>{this.RTCPeerConnection||this.invite(),"stable"==this.RTCPeerConnection.signalingState?(await this.RTCPeerConnection.setRemoteDescription(e),await this.RTCPeerConnection.setLocalDescription(),this.socket.emit("answer",this.RTCPeerConnection.localDescription,this.room)):await Promise.all([this.RTCPeerConnection.setLocalDescription({type:"rollback"}),this.RTCPeerConnection.setRemoteDescription(e)])};onAnswer=async t=>{await this.RTCPeerConnection.setRemoteDescription(t).catch(e)};onIceCandidata=async t=>{this.RTCPeerConnection||this.invite();try{await this.RTCPeerConnection.addIceCandidate(t)}catch(t){e()}};sendData=e=>{this.DataChanel.send(JSON.stringify(e))};muteMicrophone=()=>{this.webcamStream.getTracks().forEach((e=>{"audio"===e.kind&&(e.enabled=!e.enabled,this.audioEnabled=e.enabled,this.onMuteMicrophone(e.enabled))}))};pauseVideo=()=>{this.BackgroundReplacement&&"active"===this.BackgroundReplacement.state&&this.replaceBackground("origin"),this.webcamStream.getTracks().forEach((e=>{"video"===e.kind&&(e.enabled=!e.enabled,this.videoEnabled=e.enabled,this.onPauseVideo(e.enabled))}))};togglePictureInPicture=()=>{"pictureInPictureEnabled"in document||this.remoteVideo.webkitSetPresentationMode?document.pictureInPictureElement?document.exitPictureInPicture().catch((e=>{})):"inline"===this.remoteVideo.webkitPresentationMode?this.remoteVideo.webkitSetPresentationMode("picture-in-picture"):"picture-in-picture"===this.remoteVideo.webkitPresentationMode?this.remoteVideo.webkitSetPresentationMode("inline"):this.remoteVideo.requestPictureInPicture().catch((e=>{alert("您必须连接到其他人才能进入画中画模式")})):alert("你的浏览器不支持画中画。考虑使用Chrome或Safari。"),this.onTogglePictureInPicture()};switchStream=e=>{if(!this.RTCPeerConnection)return;const t=e.getVideoTracks()[0];this.RTCPeerConnection.getSenders().find((function(e){return e.track.kind===t.kind})).replaceTrack(t)};swap=async()=>{if("camera"===this.mode)try{this.webcamStream=await this.getDisplayMedia(),this.mode="screen",this.switchStream(this.webcamStream)}catch(e){}else try{this.webcamStream=await this.getUserMedia(),this.mode="camera",this.switchStream(this.webcamStream)}catch(e){}};handleRecieveWhiteboard(e){"none"===this.WHITEBOARD.whiteboard.style.display&&this.WHITEBOARD.toggleWhiteboard();const t=this.WHITEBOARD.whiteboard.width,i=this.WHITEBOARD.whiteboard.height;this.WHITEBOARD.drawLine(e.x0*t,e.y0*i,e.x1*t,e.y1*i,e.color)}replaceBackground(e="replace"){this.BackgroundReplacement||(this.BackgroundReplacement=new m({localVideo:this.localVideo,webcamStream:this.webcamStream,maskImg:this.maskImg,backgroundCanvasId:this.backgroundCanvasId}));const t=this.BackgroundReplacement.mode;this.BackgroundReplacement.mode=e,"inactive"===this.BackgroundReplacement.state&&"origin"!==e&&this.BackgroundReplacement.restart(),e!==t&&"origin"!==e||"active"!==this.BackgroundReplacement.state||this.BackgroundReplacement.stop(),this.RTCPeerConnection&&"connected"===this.RTCPeerConnection.connectionState&&"origin"!==e&&this.switchStream(this.BackgroundReplacement.stream),this.RTCPeerConnection&&"connected"===this.RTCPeerConnection.connectionState&&"origin"===e&&this.switchStream(this.webcamStream)}sendFile=e=>{let t=0;const i=new FileReader;this.sendData({type:"file",fileName:e.name,fileSize:e.size}),i.onload=i=>{this.DataChanel.send(i.target.result),t+=i.target.result.byteLength,t<e.size&&n(t)};var n=n=>{const o=e.slice(t,n+16384);i.readAsArrayBuffer(o)};n(0)};screenshot=()=>{if(!this.RTCPeerConnection)return;const e=document.createElement("canvas");e.width=this.remoteVideo.videoWidth,e.height=this.remoteVideo.videoHeight;return e.getContext("2d").drawImage(this.remoteVideo,0,0),e.toDataURL()}}b.prototype.onMuteMicrophone=e=>{},b.prototype.onPauseVideo=e=>{},b.prototype.onTogglePictureInPicture=()=>{},b.prototype.onRecieveMessage=e=>{},b.prototype.onTrack=e=>{},b.prototype.onRecieveFile=e=>{},b.prototype.onGetDisplayMedia=()=>{},b.prototype.onGetDisplayMediaError=()=>{},b.prototype.onGetUserMedia=()=>{},b.prototype.onGetUserMediaError=()=>{},module.exports=b;
