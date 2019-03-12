header = "https://hannahker.github.io/web-development/data/header.json";
table13 = "https://hannahker.github.io/web-development/data/parks-consultation.json";
table14 = "https://hannahker.github.io/web-development/data/gen-eng-subset.json";

function getData(source){
	var XMLHttpRequestObject = false; 
	if(window.XMLHttpRequest){
		XMLHttpRequestObject = new XMLHttpRequest();
		XMLHttpRequestObject.responseType = 'json';

	} else if(window.ActiveXObject){
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(XMLHttpRequestObject){
		XMLHttpRequestObject.open("GET", source);

		XMLHttpRequestObject.onreadystatechange = function(){
			if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){
				data=XMLHttpRequestObject.response;
				//creates tabulator table for section 1.3
				function fillTable13(){
					var colHeaders = Object.keys(data[0]); 
					
					//create Tabulator on DOM element with id "example-table"
					var table = new Tabulator("#example-table", {
					 	height:500, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
					 	data:data, //assign data to table
					 	layout:"fitColumns", //fit columns to width of table (optional)
					 	columns:[ //Define Table Columns
					 		{title:colHeaders[0], field: colHeaders[0], headerSort:false, formatter: "textarea"},
					 		//{title:colHeaders[0], field: colHeaders[0], headerSort:false, cellClick:function(e,cell){reveal('a');}},
						 	{title:colHeaders[1], field:colHeaders[1], headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[2], field:colHeaders[2], headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[3], field:colHeaders[3], headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[4], field:colHeaders[4], headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[5], field:colHeaders[5], headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[6], field:colHeaders[6], headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[7], field:colHeaders[7], headerSort:false, formatter: "textarea"},
					 	],

					});
					//function to highlight a column based on the column index
					//index = array of integers with column indices to highight 
					//color = highlight color 
					function highlightColumn(index, color){
						//select the columns components
						var colList = table.getColumns();
						//get the total number of columns 
						var x = colList.length; 
						//get the total number of rows - ASSUMES THE DATASET IS SYMMETRICAL	
						var y = colList[0].getCells().length; 
						//get length of input index array 
						var z = index.length;

						//remove all colours 
						for(var i=0; i<x; i++){
							var cur_col = colList[i].getCells(); 
							for(var j=0; j<y; j++){
								var cur_cell = cur_col[j]; 
								cur_cell.getElement().style.backgroundColor = 'white'; 
							}
						}
						//add colours to the right cells 
						for(var i=0; i<z; i++){
							var col_highlight = colList[index[i]].getCells(); 
							for(var j=0; j<y; j++){
								var cur_cell = col_highlight[j]; 
								cur_cell.getElement().style.backgroundColor = color;  
							} 
						}
					}
					//row indices for each type of data 
					var metadata = [0, 1, 2]; 
					var quantd = [0,3]; 
					var quantc = [1,7]; 
					var qualn = [2,5,6]; 
					var qualo = [4]; 

					document.getElementById("metadata").addEventListener("click", function(){
							highlightColumn(metadata, "#dee3ea"); 
						});	
					document.getElementById("quant-d").addEventListener("click", function(){
							highlightColumn(quantd, "#dee3ea"); 
						});	
					document.getElementById("quant-c").addEventListener("click", function(){
							highlightColumn(quantc, "#dee3ea"); 
						});	
					document.getElementById("qual-n").addEventListener("click", function(){
							highlightColumn(qualn, "#dee3ea"); 
						});	
					document.getElementById("qual-o").addEventListener("click", function(){
							highlightColumn(qualo, "#dee3ea"); 
						});	
				}
				//end of function 

				//creates tabulator table for section 1.4
				function fillTable14(){
					var colHeaders = Object.keys(data[0])
					//create Tabulator on DOM element with id "example-table"
					var table = new Tabulator("#quiz-table", {
					 	height:500, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
					 	data:data, //assign data to table
					 	columns:[ //Define Table Columns
					 		{title:colHeaders[0], field: colHeaders[0], width: 40, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[1], field:colHeaders[1], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[2], field:colHeaders[2], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[3], field:colHeaders[3], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[4], field:colHeaders[4], width: 40, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[5], field:colHeaders[5], width: 200, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[6], field:colHeaders[6], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[7], field:colHeaders[7], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[8], field:colHeaders[8], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[9], field:colHeaders[9], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[10], field:colHeaders[10], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[11], field:colHeaders[11], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[12], field:colHeaders[12], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[13], field:colHeaders[13], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[14], field:colHeaders[14], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[15], field:colHeaders[15], width: 80, headerSort:false, formatter: "textarea"}
					 	],

					});	
				}

				//fills standard text across all pages 
				function fillHeader(){
					//fill in title
					document.getElementById("title").innerHTML = data.Title; 
					//fill in nav bar
					document.getElementById("header-1").innerHTML = data.Header[0];
			    	document.getElementById("header-2").innerHTML = data.Header[1];
			    	document.getElementById("header-3").innerHTML = data.Header[2];	
			    	//fill in dropdown
			    	document.getElementById("dropdown-1").innerHTML = data.Dropdown[0];
			    	document.getElementById("dropdown-2").innerHTML = data.Dropdown[1];
			    	document.getElementById("dropdown-3").innerHTML = data.Dropdown[2];
			    	//fill in footer
				}

				//determine which type of content to fill
				if(source == "https://hannahker.github.io/web-development/data/header.json"){
					fillHeader();
				}
				if(source == "https://hannahker.github.io/web-development/data/parks-consultation.json"){
					fillTable13(); 
				}
				if(source == "https://hannahker.github.io/web-development/data/gen-eng-subset.json"){
					fillTable14(); 
				}

				delete XMLHttpRequestObject; 
				XMLHttpRequestObject = null; 
			}
		}

		XMLHttpRequestObject.send(null);
	}
	
}
getData(header);
getData(table13); 
getData(table14)