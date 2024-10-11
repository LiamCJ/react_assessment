const getImageName = (image)=>{
    let imageId;
    if(image !== '' && image != null){
        imageId = image.substring(7);
    }
    return imageId;
};

const getAudioName = (audio)=>{
    let audioId;
    if(audio !== '' && audio != null){
        audioId = audio.substring(4);
    }
    return audioId;
};

export {getImageName, getAudioName};