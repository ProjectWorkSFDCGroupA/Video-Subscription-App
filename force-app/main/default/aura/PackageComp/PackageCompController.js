({
    fireBookNowEvent : function(component,event,helper){
        
        let bookNow = component.getEvent("packageEvent");
        bookNow.setParams({
            "package": component.get("v.package")
        })
        bookNow.fire();
        console.log("fired");
        console.log(JSON.stringify(component.get("v.package")));
    },
})