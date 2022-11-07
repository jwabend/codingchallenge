
export function UTC()
    {  
        let date: Date = new Date(); 
        var hours=date.getHours();
        var minutes=date.getMinutes();
        var seconds=date.getSeconds();
        var timezone = date.getTimezoneOffset()/60;
        let localDate: string = hours + ":" + minutes + ":" + seconds + " GMT " + "-" + timezone;
        return <h1>{localDate}</h1>
    }

