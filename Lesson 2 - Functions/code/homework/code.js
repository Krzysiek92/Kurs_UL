(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.aircrafts = [];
    
    ////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Sample aircraft with sample service  /////////////// 
    
    /*global.UAM.aircrafts.push({
        code: 'SP-ABC',
        services: []
    });
    
    global.UAM.aircrafts[0].services.push({
        name: 'smth1',
        timeToExecute: 120
    });*/
    
    //////////////////////////////////////////////////////////////////////////////////////

    global.UAM.addAircraft = function (newAircraftCode) {
        // function should return new aircraft object
        global.UAM.aircrafts.push({
            code: newAircraftCode ,
            services: []
        });
        return global.UAM.aircrafts[global.UAM.aircrafts.length-1];
    };

    global.UAM.removeAircraft = function (aircraftObj) {
        var a = global.UAM.aircrafts.indexOf(aircraftObj);
        if (a>-1)
        global.UAM.aircrafts.splice(a,1);
        
        // !!!
    };

    global.UAM.addWorkToAircraft = function(aircraftObj , name, timeToExxecute) {
        // !!!
        aircraftObj.services.push({
            name: name,
            timeToExecute: timeToExxecute
        });
    };
    
    global.UAM.reduceTimeToExecute = function(aircraftObj, time) {
        if(aircraftObj.services !== null)
        
        for(var i=0; i < aircraftObj.services.length; i++)
        {
            aircraftObj.services[i].timeToExecute-=time;
        }
        // !!!
   
    };
    
    
    global.UAM.getAircraftsForRepairs = function(maxTimeToExecute) {
        // !!!
        var tab= [];
        global.UAM.aircrafts.forEach(function(aircraft){
            if(aircraft.services != null){
               for(var i=0; i< aircraft.services.length; i++){
                   if (aircraft.services[i].timeToExecute <= maxTimeToExecute){
                   tab.push(aircraft);
                   break;
                   }
                   
               } 
                
               
            }
            
            
            
        });
        return tab;
        
    };

}(window));
    
