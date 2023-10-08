import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Dashboard Login",
      type: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          username: "Zain",
          password: "mystrongpassword",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
