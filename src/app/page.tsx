'use client';

import type { Review } from '../../mocks/types';
import { useEffect, useState } from 'react';

export default function Home() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);

        const reviewsResponse = await fetch('/reviews');

        if (!reviewsResponse.ok) {
          throw new Error('Failed to fetch reviews');
        }

        const reviewsData = await reviewsResponse.json();
        setReviews(reviewsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading reviews...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg text-red-500">
          Error:
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-bold">Reviews</h1>

        {/* Reviews Section */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">Reviews Data (from /reviews)</h2>
          {reviews.length > 0
            ? (
                <div className="space-y-4">
                  {reviews.map(review => (
                    <div key={review.id} className="border-l-4 border-blue-500 pl-4">
                      <div className="font-medium text-gray-800">{review.author}</div>
                      <div className="mt-1 text-gray-600">{review.text}</div>
                      <div className="mt-2 text-sm text-gray-400">
                        ID:
                        {review.id}
                      </div>
                    </div>
                  ))}
                </div>
              )
            : (
                <div className="text-gray-500">No reviews found</div>
              )}
        </div>

        {/* Test Instructions */}
        <div className="mt-8 rounded-lg bg-blue-50 p-6">
          <h3 className="mb-2 text-lg font-semibold">How to test:</h3>
          <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
            <li>Open browser DevTools → Network tab</li>
            <li>Refresh the page and look for requests to the mock endpoints</li>
            <li>Verify the data matches what's defined in your handlers.ts</li>
            <li>Check that MSW is intercepting the requests (you should see them in the Network tab)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
