function getPerimeter(typeOfShape, value){
     return typeOfShape == "s" ? 4*value : 6.28 * value;
	
}

console.log(getPerimeter("c",4));