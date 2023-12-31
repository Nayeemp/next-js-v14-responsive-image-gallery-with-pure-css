import SingleImage from "./SingleImage/SingleImage";

// import img1 from "../../../public/Images/fl.jpg";
import img1 from "../../../public/Images/One Punch Man.jpg";
import "./ImageGallery.css";

function ImageGallery() {
  return (
    <div className="image-galary">
      <SingleImage src={img1} title="flower" alt="flower" />
      <SingleImage src={img1} title="flower" alt="flower" />
      <SingleImage src={img1} title="flower" alt="flower" />
      <SingleImage src={img1} title="flower" alt="flower" />
    </div>
  );
}

export default ImageGallery;
