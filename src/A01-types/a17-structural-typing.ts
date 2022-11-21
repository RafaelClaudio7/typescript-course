/* eslint-disable*/

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { userName: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.userName === sentValue.userName && user.password === sentValue.password
  );
};

const bdUser = {userName: 'Rafael', password: '142536'};
const sentUser = { userName: 'Rafael', password: '142536'};

const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);

export default 1;
