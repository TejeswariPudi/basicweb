const imageInput = document.getElementById('imageInput');
const video = document.getElementById('video');
const outputCanvas = document.getElementById('outputCanvas');
const cameraIcon = document.getElementById('cameraIcon');
const inputContainer = document.getElementById('inputContainer');
const displaySize = { width: outputCanvas.width, height: outputCanvas.height };
let videoInitialized = false;
let videoStream;

imageInput.addEventListener('change', async function(event) {
    const file = event.target.files[0];
    if (file) {
        const img = await faceapi.bufferToImage(file);
        const detections = await faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors();
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        outputCanvas.getContext('2d').drawImage(img, 0, 0, displaySize.width, displaySize.height);
        faceapi.draw.drawDetections(outputCanvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(outputCanvas, resizedDetections);
    }
});

function initializeVideoStream() {
    navigator.mediaDevices.getUserMedia({ video: {} })
        .then(stream => {
            videoStream = stream;
            video.srcObject = stream;
            video.autoplay = true;
            video.playsinline = true;
            video.style.display = 'block';
            inputContainer.style.display = 'none'; // Hide file input when camera is active
            videoInitialized = true;
        })
        .catch(error => {
            console.error('Error accessing the camera:', error);
            cameraIcon.style.display = 'none'; // Hide camera icon if there's an error accessing the camera
        });
}

function toggleCamera() {
    if (!videoInitialized) {
        initializeVideoStream();
    } else {
        videoStream.getTracks().forEach(track => {
            track.stop();
        });
        videoInitialized = false;
        video.style.display = 'none';
        inputContainer.style.display = 'block'; // Show file input when camera is deactivated
    }
}
