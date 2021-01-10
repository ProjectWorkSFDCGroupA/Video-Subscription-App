({
    doInit : function(component, event, helper) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1));
        var sURLVariables = sPageURL.split('?');
        component.set("v.isOpen",true);
        
        if(sPageURL == ''){
            window.location.href="/sample/s/loginpage";
        }
        else{    
            component.set("v.recId",sURLVariables[0]);    
        }
        console.log("loading doinit");
        var action = component.get('c.checkPayment');

        var recId = component.get("v.recId");
        action.setParams({
            "recId" : recId
        });
        action.setCallback(this, function(response){
            console.log("id : "+recId);
            if(response.getState() == 'SUCCESS'){
                var customerObj = response.getReturnValue();
                component.set("v.customerName",customerObj.Name__c);
                var name = component.find('cnameField');
                name.set("v.value",customerObj.Id);
            }else{
                console.log("error in callback card js");
            }
        });
        
        
        $A.enqueueAction(action);  
    },
    
    confirmPayment : function(component, event, helper) {
        var recId = component.get("v.recId");
        $A.get('e.force:showToast').setParams({
            "title": "Success!!!",
            "message": "You have Successfully got Your membership to Pluto",
            "type": "success",
            "duration":"8000"
        }).fire();
     
        window.location.href="/sample/s/mainlist?"+recId;

    },
    
    redLogin : function(component, event, helper) {
        window.location.href="/sample/s/loginpage";
    }
})