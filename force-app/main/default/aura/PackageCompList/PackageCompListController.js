({
    doInit : function(component, event, helper) {
        let action = component.get('c.getPackages');
        helper.getPackages(component,action,event);
    },
    
    handleBookNowEvent : function(component, event, helper) {
        console.log("handled");
        var packageObj = event.getParam("package");
        console.log(JSON.stringify(packageObj));
        component.set("v.selectedPackage", packageObj);
        component.set("v.isOpen", true);
    }  
})