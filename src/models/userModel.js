// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Please provide a name"]
//     },
//     email: {
//         type: String,
//         required: [true, "Please provide an email address"],
//         unique: true,
//         match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     },
//     password: {
//         type: String,
//         required: [true, "Please provide a password"]
//     },
//     isVerified: {
//         type: Boolean,
//         default: false
//     },
//     isAdmin: {
//         type: Boolean,
//         default: false
//     },
//     forgotPasswordToken: String,
//     forgotPasswordTokenExpiration: Date,
//     verifyToken: String,
//     verifyTokenExpiration: Date
// });

// const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

// export default UserModel;


// // module.exports = mongoose.models.User  || mongoose.model("User", userSchema);

