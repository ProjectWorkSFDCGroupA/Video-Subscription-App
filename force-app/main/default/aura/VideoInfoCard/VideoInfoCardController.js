({
    navigate : function (component, event, helper) {
        let playScript = component.getEvent("playScript");
        playScript.setParams({
            "video": component.get("v.video")
        });
        playScript.fire();
        console.log("event fired");
    },
    fireCaseEvent : function (component, event , helper){
        var appEvent = $A.get("e.c:CaseEvent");
        appEvent.setParams({
            "video" : component.get("v.video")
        });
        console.log("event fired case");
        appEvent.fire();
        
    }
})