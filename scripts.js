// scripts.js

function drawTree(n) {
	for(var i=1 ; i<= n; i++) {
		var star='';
		for(var j=n; j>=i+1; j--) {
                star+= " ";
		}; 
        for (var k=0; k<(2*i-1); k++) {
        	     star+='*';
        };		
		console.log(star);
	};
	
};

drawTree(10);