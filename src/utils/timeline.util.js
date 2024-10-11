class Timeline {
    constructor(id, episode, title, media, description, image, icon, audio, remoteId, status, isActive, inId, createDate, mediaName, category, epoch , audioSize) {
        this.id = id;
        this.episode = episode;
        this.title = title;
        this.media = media;
        this.description = description;
        this.image = image;
        this.icon = icon;
        this.audio = audio;
        this.remoteId = remoteId;
        this.status = status;
        this.isActive = isActive;
        this.inId = inId;
        this.createDate = createDate;
        this.mediaName = mediaName;
        this.category = category;
        this.epoch = epoch;
        this.audioSize = audioSize;
    }
  }

  export default Timeline;