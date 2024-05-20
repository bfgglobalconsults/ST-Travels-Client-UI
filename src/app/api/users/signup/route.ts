// import { connect } from "@/dbConfig/dbConfig";
// import User from "@/models/userModel";
// import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";

// connect();

// export async function POST(request: NextRequest) {
//   try {
//     const reqBody = await request.json();
//     const { name, email, password } = reqBody;

//     // Check if user exists
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return NextResponse.json(
//         { error: "Account already exists" },
//         { status: 400 }
//       );
//     }

//     // Hash the password
//     const hashedPassword = await bcryptjs.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     const savedUser = await newUser.save();
//     console.log("User created successfully:", savedUser);

//     return NextResponse.json({
//       message: "User created successfully",
//       user: {
//         name: savedUser.name,
//         email: savedUser.email,
//       },
//     });
//   } catch (error: any) {
//     console.error("Sign up failed:", error.message);
//     return NextResponse.json(
//       { error: "Sign up failed. Please try again" },
//       { status: 500 }
//     );
//   }
// }
