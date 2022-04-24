import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {FacebookProfile} from "next-auth/providers/facebook"
import "firebase/firestore"


// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/providers/overview
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async session({session, token}) {
      session.user.tag = session.user.name.split(" ").join("").toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },

  secret: process.env.SECRET

});