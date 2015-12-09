module.exports = {
	"GET /webapi/user":{
		status:200,
		msg:'',
		result:{
			total:15,
			lists:[
				{id:1,name:'Keane'},
				{id:2,name:'Keane_2'},
				{id:3,name:'Keane_3'},
				{id:4,name:'Keane_4'},
				{id:5,name:'Keane_5'},
				{id:6,name:'Keane_6'}
			],
			page:1
		}	
	},
	"POST /webapi/user":{
		status:200,
		msg:'success'
	},
	"PUT /webapi/user/1":{
		status:200,
		msg:'',
		result:{
			
		}
	}
}