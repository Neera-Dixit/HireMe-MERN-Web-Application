import $ from 'jquery';

let ajaxService= {
	get : function(url){
		return new Promise((success,error)=>{
			$.ajax({
				type : 'GET',
				dataType:"json",
				url,
				success,
				error
			});
		});
	},
	post : function(url,data){
		return new Promise((success,error)=>{
			$.ajax({
				type : 'POST',
				dataType:"json",
				data,
				url,
				success,
				error
			});
		});
	}
}

export default ajaxService;