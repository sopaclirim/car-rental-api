# Car Rental API

This project is a `Node.js` and `Express.js` API for a simple car rental system using `MongoDB`.

## Technologies Used
- **Node.js** - Backend framework
- **Express.js** - Web framework for API
- **MongoDB** - Database for storing cars and users
- **MongoClient** - Database connection
- **bcryptjs** - Password encryption
- **jsonwebtoken (JWT)** - User authentication
- **dotenv** - Environment variable management
- **nodemon** - Auto-restart server during development

---

## Installation & Usage

### Clone the project from GitHub

```sh
git clone https://github.com/sopaclirim/car-rental-api.git
cd car-rental-api
```

### Install dependencies

```sh
npm install
```

## 📌 Environment Variables (`.env` File)
The `.env` file is included in the root directory of the project. Ensure it is properly configured before starting the server.

Here is an example of the `.env` file:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/carRental
JWT_SECRET=your_secret_key
```

## 🚀 Starting the Server
Once you have installed dependencies and set up the `.env` file, you can start the server using:

```sh
npm run dev
```
or

```sh
npm start
```


---

### **📌 Using the Filtering Endpoint**
#### 🔎 Filtering Cars by Attributes
You can filter rental cars based on different parameters like:
```md
- `year`
- `color`
- `steering_type`
- `number_of_seats`
```

### Example Request:
GET http://localhost:5000/api/rental-cars?year=2022&steering_type=automatic

### Example Response (`200 OK`):
```json
[
    {
        "_id": "67ba60af8c1467274376c7cb",
        "name": "BMW X5",
        "price_per_day": 80,
        "year": 2022,
        "color": "black",
        "steering_type": "automatic",
        "number_of_seats": 5
    }
]
```


### **🚀 Summary**
- **The `.env` file is provided** and must be configured before running the server.
- **The server can be started with `npm run dev` or `node rent.js`.**
- **The `/api/rental-cars` endpoint allows filtering based on query parameters.**
