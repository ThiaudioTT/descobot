const ical = require('ical');
 
const data = ical.parseFile('calendar.ics');


// list events after now
const now = new Date(Date.now());
let events = [];
for(let k in data) {
    if(data.hasOwnProperty(k)) {
        let event = data[k];
        if(now < new Date(event.start.toISOString())){
            
            events.push(
                {
                    summary: event.summary,
                    start: event.start.toISOString(),
                    end: event.end.toISOString(),
                    description: event.description.replace(/(<([^>]+)>)/gi, " "),
                }
            )
        }
    }
}

console.log(events);

// console.log(new Date(ev.start.toISOString()));
/*
for (let k in data) {
    if (data.hasOwnProperty(k)) {
        var ev = data[k];
        if (data[k].type == 'VEVENT') {
            console.log(`${ev.summary} is in ${ev.location} on the ${ev.start.getDate()} of ${months[ev.start.getMonth()]} at ${ev.start.toLocaleTimeString('en-GB')}`);
 
        }
    }
}*/