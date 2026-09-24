const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Employee = require('./models/Employee');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb://127.0.0.1:27017/employeeDB';

mongoose.connect(mongoURI)
    .then(() => console.log('Successfully connected to MongoDB (employeeDB)...'))
    .catch(err => console.error('MongoDB connection error:', err));


app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({
            success: true,
            message: "Employees fetched successfully",
            count: employees.length,
            data: employees
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error occurred while fetching employees",
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
