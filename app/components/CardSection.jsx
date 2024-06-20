import Link from 'next/link';

const CardSection = ({ title, items, isLink = false }) => {
  return (
    <div className="mb-4 flex gap-1">
      <p className="text-lg font-bold">{title}:</p>
      <div className="flex flex-wrap">
        {items.map((item, index) => (
          <span key={index} className="text-base flex items-center">
            <Link
              href={item.url}
              className="capitalize hover:underline break-words"
              target="_blank"
            >
              {item.name}
              {index < items.length - 1 && <span className="mr-1">,</span>}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
