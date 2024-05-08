import { genSalt, hash } from "bcryptjs";

function useHashString(string) {
  return new Promise((resolve, reject) => {
    genSalt(10, (err, salt) => {
      if (err) reject(err);

      hash(string, salt, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });
  });
}

export default useHashString;
