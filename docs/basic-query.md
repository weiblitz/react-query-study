# Basic Query with Container/Presentational Pattern

This example demonstrates React Query's basic data fetching using the **Container/Presentational** design pattern. The pattern separates data fetching logic from UI rendering, making components more testable and reusable.

## Architecture Overview

### Container Component (`BookContainer`)
- **Responsibility**: Data fetching and state management
- **Uses**: React Query hooks (`useGetBooks`)
- **Handles**: Loading, error, and success states
- **Delegates**: UI rendering to presentational components

### Presentational Components
- **`Book`**: Renders individual book data
- **`BookLoader`**: Shows loading state
- **`BookError`**: Handles error display with retry functionality
- **`BookGrid`**: Layout wrapper for book list
- **`NoBookMessage`**: Empty state display

## Key Benefits

1. **Separation of Concerns**: Data logic isolated from UI
2. **Reusability**: Presentational components can be used elsewhere
3. **Testability**: Easy to test data logic and UI separately
4. **Maintainability**: Changes to data fetching don't affect UI components

## Implementation Details

### Data Fetching Hook
```typescript
// src/api/services/book.ts
export const useGetBooks = ({ queryConfig }: UseBooksOptions = {}) => {
  return useQuery({
    ...getBooksQueryOptions(),
    ...queryConfig,
  });
};
```

### Container Component
```typescript
// src/app/basic-query/_components/book-container.tsx
export default function BookContainer() {
  const { data: books, isLoading, error, refetch } = useGetBooks();

  if (isLoading) return <BookLoader />;
  if (error) return <BookError error={error} refetch={refetch} />;
  
  return books?.length > 0 ? (
    <BookGrid>
      {books.map(book => <Book key={book.id} {...book} />)}
    </BookGrid>
  ) : <NoBookMessage />;
}
```

### Presentational Component
```typescript
// src/app/basic-query/_components/book.tsx
export default function BookComponent({ imageUrl, title, description }: Book) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
      <Image src={imageUrl} alt={title} className="mb-3 h-48 w-full rounded object-cover" />
      <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="line-clamp-3 text-sm text-gray-600">{description}</p>
    </div>
  );
}
```

## State Management Flow

1. **Loading**: `isLoading = true` → renders `BookLoader`
2. **Error**: `error` exists → renders `BookError` with retry button
3. **Success**: `data` exists → renders `BookGrid` with `Book` components
4. **Empty**: No data → renders `NoBookMessage`

## React Query Integration

- **Query Key**: `['books']` for caching
- **Query Function**: `getBooks()` API call
- **Automatic Refetching**: Built-in retry and refetch capabilities
- **Error Handling**: Centralized error state management