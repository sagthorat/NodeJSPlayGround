const http = require('http');
url = 'http://api.weatherstack.com/current?access_key=ff823831ba5d50c95016c10a787ffa3b&query=Melbourne&units=m';

const request = http.request(url,(response)=>{


    let data = '';
    response.on('data',(chunk)=>{

        data = data + chunk.toString();
        


    }); //register handler

    response.on('end',(chunk)=>{

        const body = JSON.parse(data);
        console.log(body);

    });

})

request.on('error',(error)=>{

    console.log ('Error occured',error);

})
request.end();