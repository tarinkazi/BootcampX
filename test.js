const keysMatch = function(obj1, obj2, keys) {
  for (let i in keys) {
    if (obj1[i] !== obj2[i]){
      return false;
    }
  }
  return true;

};
