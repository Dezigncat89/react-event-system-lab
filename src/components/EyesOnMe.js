import React from 'react';

function EyesOnMe(){
	handleChange(event){
		if(event.key === 'f'){
			console.log('Good!')
	}
		else if (event.key === 'b') {
		  console.log('Hey! Eyes on Me!')
	}
}

	return (
		<div>
				<h1>Do youy see me?</h1>
					<input type="text" value={attention} onKeyPress={handleChange}/>
				<p> Press f for Focus or b for Blur</p>
	</div>
)
}
