# 🎫 Support Ticket System

A simple and functional **Support Ticket Management System** built with **Node.js, Express and MySQL**.

This project allows users to register, log in, create tickets with file uploads, and track their issues. Admins can manage all tickets and update their status dynamically using AJAX.

---

## 🚀 Features

### 👤 User Features

* Register & Login (Session-based authentication)
* Create support tickets
* Upload screenshots/files
* View own tickets
* Edit tickets (including file replacement)

### 🛠️ Admin Features

* View all users' tickets
* Update ticket status (Open / In Progress / Closed)
* AJAX-based status update (no page reload)
---

## 🧰 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **ORM:** Sequelize
* **Frontend:** EJS, Bootstrap, jQuery
* **Authentication:** express-session
* **File Upload:** Multer

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/avilashsaha035/support-ticket-system
cd support-ticket-system
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file in root:

```env
PORT=5000
DB_NAME=support_ticket_system
DB_USER=root
DB_PASS=your_password
DB_HOST=localhost
SESSION_SECRET=your_secret_key
```

---

### 4️⃣ Create Database

In MySQL:

```sql
CREATE DATABASE support_ticket_system;
```

---

### 5️⃣ Run the Project

```bash
npm run dev
```

Or:

```bash
npm start
```

---

## 🌐 Access the App

* URL: [http://localhost:5000](http://localhost:5000)
---

## 🔐 Default Roles

* Users → Can manage their own tickets
* Admin → Can view all tickets and update status

👉 To make a user admin:

```sql
UPDATE Users SET role = 'admin' WHERE email = 'your@email.com';
```

---


## 👨‍💻 Author

**Avilash Saha**
Email: [sahaavilash5055@gmail.com](mailto:sahaavilash5055@gmail.com)

---

## 📜 License

This project is licensed under the ISC License.

---
