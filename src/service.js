import "./types.js";

/**
 * 
 * @param {IncomingUser} user 
 * @returns {OutcomingUser}
 */
export function parseUser(user) {
  return {
    name: user.name.toUpperCase(),
    email: user.email,
  };
}
