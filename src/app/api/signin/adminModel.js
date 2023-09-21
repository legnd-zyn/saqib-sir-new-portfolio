import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: String,
});

// Method to create and hash a password
adminSchema.methods.createAndHashPassword = async function (password) {
  try {
    const saltRounds = 10; // Adjust the number of salt rounds as needed
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    this.password = hashedPassword;
    return this.save();
  } catch (error) {
    console.log(error);
    throw new Error("Error generating password hash");
  }
};

// Method to validate a password against the hashed password in the database
adminSchema.methods.validatePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

export default Admin;
