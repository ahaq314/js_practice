function createObject(obj, petName, value) {
  // Create a new object
  let newObj = {};
  
  // Add the key-value pairs to the object
  newObj[petName] = value;
  newObj["stolen_items"] = obj;
  
  // Return the new object
  return newObj;
}
createObject('piano','goat','400');