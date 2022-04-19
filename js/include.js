fetch("common/header.html")
	.then(
		(res1) => res1.text()
	)
	.then(data => {
		document.querySelector("header").innerHTML = data;
		return fetch("common/footer.html");
	})
	.then((res2) => res2.text()
	)
	.then(data => {
		document.querySelector("footer").innerHTML = data;
	});
// fetch("common/footer.html")
// 	.then(response => {
// 		return responce.text()
// 	})
// 	.then(data => {
// 		document.querySelector("footer").innerHTML = data;
// 	});