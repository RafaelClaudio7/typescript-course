// any declaration explicit
// While msg have not a type, any is the implicit type
// That should be used in last instance, because is a bad pratice receive a any type

/* eslint-disable */

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage(() => 2 + 3));
