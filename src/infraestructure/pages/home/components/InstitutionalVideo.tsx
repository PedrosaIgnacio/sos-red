const EMBED_LINK = 'https://www.youtube.com/embed/8MlKALPSc1U?si=QTmERuUEOVn37nKD&autoplay=1&mute=1';

export const InstitutionalVideo = () => {
  return (
    <div className="w-full aspect-video relative">
      <iframe
        src={EMBED_LINK}
        className="absolute top-0 left-0 w-full h-full object-cover"
        title="SOS Video Institucional"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
