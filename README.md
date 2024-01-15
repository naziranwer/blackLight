# Leaderboard API Project

This project provides a set of APIs for managing a leaderboard using a MongoDB database.

## APIs

### Display Current Week Leaderboard (Top 200)

- **Endpoint:** `/leaderboard/current-week`
- **Method:** GET
- **Description:** Get the leaderboard for the current week, displaying the top 200 entries.

### Display Last Week Leaderboard (Top 200) by Country

- **Endpoint:** `/leaderboard/last-week/:country`
- **Method:** GET
- **Parameters:**
  - `country`
- **Description:** Get the leaderboard for the last week for a specific country, displaying the top 200 entries.

### Fetch User Rank by UserID

- **Endpoint:** `/user/rank/:userId`
- **Method:** GET
- **Parameters:**
  - `userId`: User ID (String)
- **Description:** Fetch the rank of a user based on their UserID.

### Generate Entries for Testing

- **Endpoint:** `/generate-data/generate-entries`
- **Method:** POST
- **Description:** Generate and insert 10,000 random entries into the database for testing purposes.

## Getting Started

1. **Clone the repository:**

   git clone https://github.com/naziranwer/blackLight.git

2.  **Navigate to the project directory:**
    cd blacklight

3. **Install Node.js Dependencies:**
     npm install

4. **Set Up MongoDB Connection:**
    Open config.js in your favorite text editor.
    Replace the placeholder values with your MongoDB connection details.

5. **Run the Application:**
     npm start
    
    This will start the server, and you should see a message indicating that the server is running at http://localhost:4000.
    
6. **Access the APIs**
    Open your browser or a tool like Postman and access the APIs at http://localhost:4000.

7. **Explore API Endpoints:**
   Use the provided API endpoints to interact with the leaderboard. Refer to the initial section of this README for details on each endpoint.