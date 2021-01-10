({
    doInit : function(component, event, helper) {
        component.set("v.isOpen", true);
        var videoObj = component.get("v.video");
        var playComponent = component.find("playField");
        playComponent.set("v.value", videoObj.Id);
    },
    
    closeModal: function(component, event, helper) {
        
        component.set("v.isOpen", false);
    }
})