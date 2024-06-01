// The useMutation hook is a React Query hook used for managing mutation operations,
// such as creating, updating, or deleting data. It simplifies handling asynchronous operations, 
// provides state management for loading and error handling, and offers callbacks for success 
// and error cases.

import { useMutation } from '@tanstack/react-query';

const { mutate, isLoading, isError, error, data, reset } = useMutation({
  mutationKey: 'unique-key',
  mutationFn: async (data) => {
    // Perform async operation (e.g., API request)
    return await asyncOperation(data);
  },
  onSuccess: (data) => {
    // Handle successful mutation
  },
  onError: (error) => {
    // Handle error
  },
});
