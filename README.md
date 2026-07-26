# Smart Expense Tracker
A full-stack Expense Tracker built using the MERN stack that helps users efficiently manage their income and expenses while providing AI-powered financial insights.

## Features
- User Authentication (Register & Login)
- Secure JWT-based Authentication
- Add, Edit, and Delete Income
- Add, Edit, and Delete Expenses
- Dashboard with Financial Overview
- Interactive Charts and Analytics
- AI-powered Expense Insights
- Responsive User Interface
- RESTful API Architecture

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Recharts
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- Multer

### AI
- Google Gemini API

## Project Structure
```
smart-expense-tracker/
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── expense_details.xlsx
│   ├── income_details.xlsx
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── Frontend/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── index.html
│   ├── eslint.config.js
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
├── postman/
│   └── globals/
│       └── workspace.globals.yaml
│
├── .postman/
│   └── resources.yaml
│
├── .gitignore
├── package.json
└── package-lock.json
```

## Installation

### Clone the Repository
```bash
git clone https://github.com/Samridhimudgal/smart-expense-tracker.git
cd smart-expense-tracker
```

## Backend Setup
```bash
cd Backend
npm install
```

Create a `.env` file inside the Backend directory:
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

Run the backend server:
```bash
npm run dev
```

## Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

## Environment Variables
The backend requires the following environment variables:
- `PORT`
- `MONGO_URI`
- `JWT_SECRET`
- `GEMINI_API_KEY`

## Future Enhancements
- Budget Planning
- Monthly Financial Reports
- Recurring Transactions
- Email Notifications
- Dark Mode
- Multi-Currency Support

## Author
**Samridhi Mudgal**
GitHub: https://github.com/Samridhimudgal

---
⭐ If you found this project useful, consider giving it a star!
