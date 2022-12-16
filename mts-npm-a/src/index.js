export function randomNumber(arg0, arg1, arg2) {
  if (arg0 == undefined) {
    return Math.random();
  }
  if (arg0 != undefined && arg1 == undefined) {
    return Math.floor(Math.random() * Math.round(arg0));
  }

  if (arg0 != undefined && arg1 != undefined && arg2 == undefined) {
    return arg0 + Math.random() * (arg1 - arg0);
  }

  if (arg0 != undefined && arg1 != undefined && arg2 != undefined) {
    let nsteps = Math.ceil((arg1 - arg0) / arg2);
    if (arg0 + nsteps * arg2 >= arg1 ) {
      nsteps -= 1;
    }
    return arg0 + Math.floor(Math.random() * (nsteps +1)) * arg2;
  }
}
