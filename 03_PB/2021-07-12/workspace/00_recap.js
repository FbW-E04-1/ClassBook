/* 

Logical operators

&& (and)
|| (or)
! (negation)

true && true -> true
false && true -> false
true && false -> false
false && false -> false
true && true && true && true && false -> false

true || true -> true
false || true -> true
true || false -> true
false || false -> false

! true -> false
! false -> true 

true && (true || false) -> true && true -> true

! false && true -> true && true -> true

*/

const isOlderThan18 = true;
const hasDriverLicense = true;

const canDrive = isOlderThan18 && hasDriverLicense;

console.log(canDrive);

const isLoggedIn = false;