import type { Book } from '../../../../mocks/types';
import Image from 'next/image';

export default function BookComponent({ imageUrl, title, description }: Book) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
      <Image
        src={imageUrl}
        alt={title}
        className="mb-3 h-48 w-full rounded object-cover"
        width={300}
        height={400}
      />
      <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="line-clamp-3 text-sm text-gray-600">{description}</p>
    </div>
  );
}
