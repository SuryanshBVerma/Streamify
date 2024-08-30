# Streamify Music Streaming Analytics Dashboard

## Project Overview

Streamify is a fictional music streaming service, and this project involves building a responsive and user-friendly dashboard to display key metrics, data visualizations, and recent stream information. This analytics dashboard will allow the service's management team to gain insights into user activity, revenue, and content performance.

The application is a single-page React application with state management handled using Redux. The data presented is mocked and displayed using charts, tables, and interactive features.

## Key Features

- **Dashboard Overview:**
  - Displays key metrics such as Total Users, Active Users, Total Streams, and Revenue.
  - Displays Top Artist information.
  
- **Data Visualization:**
  - **User Growth Chart:** Line chart to display user growth over the last 12 months.
  - **Revenue Distribution:** Pie chart to visualize revenue breakdown.
  - **Top 5 Streamed Songs:** Bar chart to display the top 5 most streamed songs.

- **Data Table:**
  - Displays recent streams with sorting and filtering functionalities.
  - Columns include Song Name, Artist, Date Streamed, Stream Count, and User ID.
  
- **Bonus Features:**
  - Implemented sorting and filtering for data tables.
  - Interactive charts, allowing hover and click actions for deeper insights.

## Thought Process

1. **Component Design:**
   - The project was broken down into modular components for better maintainability.
   - Components were created for metrics, data visualizations, and the data table to separate concerns.

2. **State Management:**
   - Redux was used to manage the state of the sidebar and user information.
   - The dashboard pulls state information to determine layout adjustments and display personalized content.

3. **Responsiveness:**
   - Tailwind CSS was used to ensure that the dashboard is responsive across different devices.
   - Used ShadCN for better and responsive design.

4. **Mock Data:**
   - Mock data was used for charts and tables. 
   
5. **Performance Considerations:**
   - Memoization and lazy loading were applied to improve performance where necessary.
   - State changes and layout adjustments are optimized to prevent unnecessary re-renders.

## Trade-offs

- **Mock Data:** Instead of connecting to a real backend, mock data was used. But a delay was added to mimic an API fetch.
- **Chart Interactivity:** The chart interactions are limited to hover and click events, but more advanced interactions like zoom or data export could be added in the future.
- **Testing:** Limited unit testing was performed due to time constraints.


# Install and Run a Vite Project

Follow these steps to clone the repository and run the Vite project:

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

Replace `your-username` and `your-repo-name` with the actual GitHub username and repository name.

## 2. Navigate to the Project Directory

```bash
cd your-repo-name
```

## 3. Install Dependencies

Make sure you have Node.js installed. Then, install the required dependencies using npm or yarn.

```bash
npm install
# or
yarn install
```

## 4. Run the Vite Project

Start the Vite development server with the following command:

```bash
npm run dev
# or
yarn dev
```

This will start the development server and the project will be accessible in your browser, typically at `http://localhost:5173`.


