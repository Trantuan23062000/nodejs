import db from "../models";
import bcrypt from "bcryptjs";

const HasdPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8));

export const register = ({ email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { email },
        defaults: {
          email,
          password: HasdPassword(password),
        },
      });

      //console.log(response);

      resolve({
        err: response[1] ? 0 : 1,
        mes: response[1] ? "Register is Success" : "Email is used",
      });

      resolve({
        err:0,
        mes:'register servirce',
      });


    } catch (error) {
      reject(error);
    }
  });
