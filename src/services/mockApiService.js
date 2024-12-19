// mockApiService.js

// Function to create a custom response (simulate API call)
export const createMockApiResponse = (status, body) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!status || !body) {
                reject("Missing status or body for mock response");
            } else {
                resolve({ status, body });
            }
        }, 1000);  // Simulate network delay
    });
};
