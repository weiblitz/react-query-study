type BookErrorProps = {
  error: Error;
  refetch: () => void;
};

export default function BookError({ error, refetch }: BookErrorProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="text-lg font-semibold text-red-500">Error loading books</div>
        <div className="mt-2 text-sm text-gray-600">
          {error?.message || 'Something went wrong'}
        </div>
        <button
          type="button"
          onClick={() => refetch()}
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
