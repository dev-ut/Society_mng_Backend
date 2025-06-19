⚠️ Disclaimer:
This project is a self-created demo inspired by my internship experience. It does not contain any proprietary or confidential code from the original organization. All logic, structure, and content have been independently developed for demonstration purposes only.

# Society Management System (MERN Stack)

A backend system built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** for managing society-related data like users, flats, and events.

## 🔧 Tech Stack

- **Node.js** + **Express.js** – RESTful APIs
- **MongoDB** + **Mongoose** – Database and modeling
- **JWT** – Authentication
- **Role-based Authorization** – Admin and resident roles

## 📁 Folder Structure

```
backend/
│
├── app.js                  # Main entry file
├── config/
│   └── db.js               # MongoDB connection
├── controllers/            # Business logic for routes
│   ├── authController.js
│   ├── userController.js
│   ├── flatController.js
│   └── eventController.js
├── middleware/             # Auth & role checks
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── models/                 # Mongoose schemas
│   ├── User.js
│   ├── Flat.js
│   └── Event.js
├── routes/                 # API routes
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── flatRoutes.js
│   └── eventRoutes.js
├── utils/
│   └── generateToken.js    # JWT generator
└── .env.example            # Sample env file
```

## 🧪 API Endpoints

### Auth
- `POST /api/auth/register` – Register new user
- `POST /api/auth/login` – Login user

### Users
- `GET /api/users/` – Get all users *(admin/resident)*
- `GET /api/users/:id` – Get user by ID

### Flats
- `GET /api/flats/` – Get all flats *(protected)*
- `POST /api/flats/` – Add flat *(admin only)*

### Events
- `GET /api/events/` – Get all events *(protected)*
- `POST /api/events/` – Create new event *(protected)*

## 🛡️ Auth & Roles

- JWT tokens issued on login/registration.
- Middleware used to protect routes.
- Role-based access to restrict critical APIs.

## 📌 Setup

```bash
git clone https://github.com/dev-ut/Connect-App.git
cd Connect-App/backend
npm install
cp .env.example .env
# 🔑 Replace MONGO_URI and JWT_SECRET in .env
npm start
```

## 🧑‍💻 Author

**Utkarsh Tiwari** – Internship Project

📬 [utkarsht701@gmail.com](mailto:utkarsht701@gmail.com)  
🌐 [LinkedIn](https://www.linkedin.com/in/utkarsh-tiwari-69244024b/)  
💻 [GitHub](https://github.com/dev-ut)

---

> 🚀 Feel free to fork and customize for your own society or apartment community!
