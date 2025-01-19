# Unhandled Promise Rejection in React Native

This repository demonstrates a common error in React Native applications: accessing state variables before they have been initialized.  This often happens with asynchronous operations such as API calls.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

Attempting to access a state variable before an asynchronous operation (e.g., fetching data from an API) completes will result in a runtime error because the variable is undefined.  This often manifests as an `Unhandled Promise Rejection`.

## Solution

The solution involves using conditional rendering or optional chaining to handle the case where the state variable is still null or undefined.  This ensures that the application doesn't crash.