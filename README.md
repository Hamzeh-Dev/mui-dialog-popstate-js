
# Centralized Dialog Management with React

This project demonstrates how to manage multiple dialogs and sub-dialogs in a React application ( Vite ) using a centralized state with Context API. It includes handling dialogs across different components and ensuring proper behavior when navigating back using the browser's history.

## Features

- Centralized dialog state management using Context API.
- Smooth handling of multiple dialogs across different components.
- Back button support to close dialogs in reverse order.

---

## Installation

1. Clone the repository:
  using http:
   ```bash
   git clone https://github.com/Hamzeh-Dev/mui-dialog-popstate-js.git
   cd mui-dialog-popstate-js
   ```
  using SSH:
   ```bash
   git clone git@github.com:Hamzeh-Dev/mui-dialog-popstate-js.git
   cd mui-dialog-popstate-js
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser at [http://localhost:3000](http://localhost:3000) to view the application.

---

## Structure

- **`DialogContext.jsx`**: Manages the centralized dialog state.
- **`Main.jsx`**: A container to handle the Dialogs.
- **`FirstDialog.jsx`**: A parent dialog component that can open sub-dialogs.
- **`SubDialog.jsx`**: A sub-dialog component opened from the main dialog.

---

## How It Works

1. **Centralized State**: Dialog visibility is managed using the `DialogContext`, which tracks open dialogs as an array of keys.
2. **Browser History**: Each time a dialog opens, it pushes a new state to the browser's history. The back button triggers the `popstate` event to close dialogs in reverse order.
3. **Reusable Components**: Each dialog can exist in separate components, and they all rely on the shared `DialogContext`.

---

## Contributing

Feel free to submit issues or pull requests to improve the project.

---