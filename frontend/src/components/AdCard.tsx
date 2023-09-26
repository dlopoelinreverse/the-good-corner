import Link from "next/link";

type AdCardProps = {
  id: number;
  imgUrl: string;
  price: number;
  title: string;
  link: string;
};
export default function AdCard({
  id,
  imgUrl,
  link,
  title,
  price,
}: AdCardProps) {
  return (
    <div className="ad-card-container">
      <Link className="ad-card-link" href={`/ad/${id}`}>
        <img className="ad-card-image" src={imgUrl} />
        <div className="ad-card-text">
          <div className="ad-card-title">{title}</div>
          <div className="ad-card-price">{price} €</div>
        </div>
      </Link>
    </div>
  );
}
