let activities = [
	{id: 'activities', 'callories':null, 'parent': null },
	{id: 'aerobic',    'callories':null,'parent': 'activities'},
	{id: 'running',    'callories':null,'parent': 'aerobic'},
	{id: 'swimming',  'calories':200, 'parent': 'aerobic'},
	{id: 'dancing',    'calories':100, 'parent': 'aerobic'},
	{id: 'walking',    'calories':300, 'parent': 'running'},
	{id: 'jogging',   'calories':300, 'parent': 'running'},

]

// var filter_aerobic = activities.filter(function(activity){
// 	return activity.parent=== 'aerobic'
// })

// var filter_aerobic = activities.filter(activity => activity.parent === 'aerobic')

// filter_aerobic

// console.log(activities)
// console.log(activities[0].parent===parent)

let count=0
let makeTree=(activities, parent) => {
	let node ={}
	
	activities
		.filter(a => a.parent === parent)
		// .forEach(a =>  node[a.id] = makeTree(activities, a.id))
		.forEach(function(a){ 
			// node['calories']=a.calories
			node[a.id] = makeTree(activities, a.id)
		}
		)
		// node['calories']=a.calories
		console.log(a)
	return node
}


console.log(
	JSON.stringify(
	makeTree(activities, null)
	, null, 2)
)

// let activities_tree= {
// 	activities: {
// 		aerobic:{
// 			running:{
// 				walking: null,
// 				jogging: null
// 			},
// 			swimming:{
				
// 			},
// 			dancing:{
				
// 			}
// 		}
// 	}
// }