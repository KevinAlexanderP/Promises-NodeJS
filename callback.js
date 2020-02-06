function processData(callback) {
    fetchData(function(err, data) {
        if (err) {
            console.log("An error has occurred. Abort everything!");
            return (err);
        }
        data += 1;
        callback(data);
    });
}

processData();