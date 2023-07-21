window.promises = [one(), two(), three() , four() , five()];

// Do not change the code above this
// add your promises to the array `promises`
let one=new promise((resolve,reject)=>{
	setTimeout(resolve, 1000);
            }).then(promise.any() {
                document.getElementById("output").innerHTML = 
                "first promise";
            });
})
