var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        regid = localStorage.getItem("regid")
        if (regid) {
           // alert("has regid " + regid);          
        } else {
            
        }
        var push = PushNotification.init({ "android": {"senderID": "392298657548", "sound": "true", "forceShow": "true"} } );

        push.on('registration', function(data) {
            // data.registrationId
            //alert(data.registrationId);
            alert(data.registrationId);
        
            var regidd = data.registrationId;
            $.getJSON( "http://team05.hahc.se/push", { regid: data.registrationId }, function(data) {
                if (data.status == "created") {
                    localStorage.setItem("regid", regidd);
                    window.location.href="http://team05.hahc.se/?regid=".regidd
                } else {                    
                    window.location.href="http://team05.hahc.se/"
                }
            } );
  
        );

        push.on('notification', function(data) {            
            alert(data.message);
        });

        
        
        push.on('error', function(e) {
        });
    }
};

app.initialize();