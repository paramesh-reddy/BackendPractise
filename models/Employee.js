const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  //name email phone city

  name: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    default: false,
  },

  email: {
    type: String,
    required: true,
  },

  city: {
    type: String,
  },
});
const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee; // ✅ default export
// module.export = mongoose.model("Employee", employeeSchema);
