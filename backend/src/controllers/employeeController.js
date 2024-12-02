const Employee = require('../models/Employee');

exports.addEmployee = async (req, res) => {
  const { name, position, department, salary } = req.body;
  try {
    const employee = new Employee({ name, position, department, salary });
    await employee.save();
    res.status(201).json({ message: 'Employee added successfully', employee });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

