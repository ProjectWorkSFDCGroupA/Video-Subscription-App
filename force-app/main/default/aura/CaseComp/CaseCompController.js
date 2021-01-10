({
    closeModal: function(component, event, helper) {
        component.set("v.isCaseOpen", false);
    },
    
    doInit : function(component, event, helper) {
        
        var sPageURL = decodeURIComponent(window.location.search.substring(1));
        var sURLVariables = sPageURL.split('?');
        component.set("v.isCaseOpen",true);
        component.set("v.recId",sURLVariables[0]); 
        var recId = component.get("v.recId");
        
        var customerComponent = component.find("customerField");
        customerComponent.set("v.value",recId);
        
        var videoObj = component.get("v.video");
        var videoComponent = component.find("videoField");
        videoComponent.set("v.value", videoObj.Id);
        
    },
    
    registerCase: function(component, event, helper) {
        helper.createCase(component);
        component.set("v.isCaseOpen", false);
    }
})