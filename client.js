function hasUserMedia(){
 navigator.getUserMedia = navigator.getUserMedia ||
navigator.webkitGetUserMedia
 || navigator.mediaDevices.getUserMedia || navigator.msGetUserMedia;
 return !!navigator.getUserMedia;
}
if (hasUserMedia()) {
 navigator.getUserMedia = navigator.getUserMedia ||
navigator.webkitGetUserMedia || navigator.mozGetUserMedia ||
navigator.msGetUserMedia;
 //get both video and audio streams from user's camera
 navigator.getUserMedia({ video: true, audio: true }, function (stream) {
	 
	 var video = document.querySelector('video');
 //insert stream into the video tag
// video.src = window.URL.createObjectURL(stream);
 video.srcObject = stream;
 }, function (err) {});
} else {
 alert("Error. WebRTC is not supported!");
}
