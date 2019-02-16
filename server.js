// ⭐️ TO-DO: 1 ⭐️
// Import Dependencies


// ⭐️ TO-DO: 2 ⭐️
//Handle our HTML pages and use Port 3000



// ⭐️ TO-DO 3 ⭐️
//get our Connection String from MongoDB Atlas

const uri = 'PASTE CONNECTION STRING HERE'


//Connect to MongoDB

mongo.connect(uri, { useNewUrlParser: true }, function(err, client){

  // ⭐️ TO-DO 4 ⭐️
  //Let's log a message to the terminal if MongoDB successfully connects of has an error

  if(err) {

    // 1. ERROR: Log an Error Message to the console in here

  } else {

    // 2. SUCCESS: Log a Success Message here

  }


  // ⭐️ TO-DO 8 ⭐️
  //Connect to our database



  //Connect to Socket.io

  io.on('connection', function(socket){

    // ⭐️ TO-DO 9 ⭐️
    //Variable to select collection


    // ⭐️ TO-DO 10 ⭐️
    //Handle the user inputing events



    // ⭐️ TO-DO 11 ⭐️
    // Get the existing messages from the collection

    });
  });
