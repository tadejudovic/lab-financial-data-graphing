let axisX; 
let axisY; 



var startDate = document.getElementById('startDate').addEventListener('change', function() {
    var input = this.value;   
    var startDate = new Date(input).toISOString().substr(0, 10).replace('T', ' ');
    
    console.log(`startDate:`,startDate)

var endDate = document.getElementById('endDate').addEventListener('change', function() {
    var input2 = this.value;   
    var endDate = new Date(input2).toISOString().substr(0, 10).replace('T', ' ');
    
console.log(`enddate:`,endDate)



const apiURL=`https://api.coindesk.com/v1/bpi/historical/close.json?start=`.concat(startDate).concat(`&end=`.concat(endDate))
console.log(apiURL)
axios 
.get(apiURL)
.then((response) => { 
    console.log(response.data.bpi)
    axisX=Object.values(response.data.bpi);
    axisY=Object.keys(response.data.bpi)

drawChart(axisX,axisY)
})
.catch((err) => console.log(err));



function drawChart (xaxis, data){ 
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels:data,
            datasets: [{ 
                data: xaxis,
                backgroundColor: [
                    'rgba(255, 30, 132, 0.2)',
                 
                ],
                
        
                
            }]
           
            }
        },
    
        // Configuration options go here
     
    
    )
}
;

})
});

/* 

var endDate = document.getElementById('endDate').addEventListener('change', function() {
    var input = this.value;   
    var d = new Date(input);

    var year=d.getFullYear();
var month=d.getMonth()+1 //getMonth is zero based;
var day=d.getDate();
endDate=year+"-"+month+"-"+day;

//console.log(endDate)
});

*/


// Get data from Coin Desk API usin get request 

