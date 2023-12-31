import Image from "next/image";
import "./SingleImage.css";

function SingleImage({ src, title, alt }) {
  return (
    <div className="img-item-container">
      <div className="img-container">
        <Image fill src={src} alt={alt} style={{ objectFit: "cover" }} />
      </div>
      <div className="image-title">{title}</div>
    </div>
  );
}

export default SingleImage;
