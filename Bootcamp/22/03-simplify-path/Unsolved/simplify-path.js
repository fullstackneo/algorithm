// Write a function that takes in an absolute file path and simplifies it

var simplifyPath = function (path) {


  // replace /// to /
  path = path.replace(/\/{2,}/g, '/');
  // replace /./
  path = path.replace(/\/\.\//g, '/');
  // loop replace /x/..
  while (/\/[a-z]\/\.\./.test(path)) {
    path = path.replace(/\/[a-z]\/\.\./gi, '');

  }


  // if start with /../ , change to /
  path.replace(/^\/\.\.\//, '/');

  // if match /a/x/ change to /a/x
  if (/[a-z]\/$/.test(path)) {
    path = path.slice(0, path.length - 1);

  }

  if (/^\/\.\.\//.test(path)) {
    path = path.slice(3);
  }

  return path;
};
console.log(simplifyPath('/home/'));
console.log(simplifyPath('/../'));
console.log(simplifyPath('/a/./b/../../c/'));
console.log(simplifyPath('/a/../../b/../c//.//'));
console.log(simplifyPath('/a/b/c/d/..'));
