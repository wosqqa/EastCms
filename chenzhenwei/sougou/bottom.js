var div = document.createElement('div'); 
			div.style.position="fixed";
			div.style.left="0";
			div.style.bottom="0";
			div.style.width="100%";
			div.style.zIndex="100";
			div.style.background="#FFFFFF";
			div.setAttribute('id', "sougou");
			document.body.appendChild(div); 
			var iframe = document.createElement('iframe'); 
			iframe.src="bottom.html";  
			iframe.style.width = "100%";
			iframe.style.height="70px";
			iframe.style.border = "0";
			document.getElementById("sougou").appendChild(iframe);