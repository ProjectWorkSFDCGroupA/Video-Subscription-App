({
    checklogin : function(action,component, event){
        let email = component.get('v.email');
        let key = component.get('v.passKey');
        
        action.setParams({
            'passKey' : key,
            'email' : email
        });
        
        action.setCallback(this,function(response){
            if(response.getState() == 'SUCCESS'){
                var urlEvent = $A.get("e.force:navigateToURL");
                console.log("success");
                
                if(response.getReturnValue() == null){
                    urlEvent.setParams({
                        "url": 'https://resourceful-shark-8qd83l-dev-ed.preview.salesforce-communities.com/sample/s/loginpage?'
                    });
                    urlEvent.fire();
                    alert("Enter Correct Crendentails. Sign Up first if new user.");
                }
                
                var newItems=[];
                newItems.push(response.getReturnValue());
                console.log('Size of  newItems = ' + newItems[0].length);
                
                if(newItems[0].length == 20){
                    urlEvent.setParams({
                        "url": '/sample/s/creditcarddetails?'+response.getReturnValue()
                    });
                    urlEvent.fire();
                }else if(newItems[0].length == 18){
                    urlEvent.setParams({
                        "url": '/sample/s/mainlist?'+response.getReturnValue()
                    });
                    urlEvent.fire();
                }else{
                    urlEvent.setParams({
                        "url": '/sample/s/loginpage?'+response.getReturnValue()
                    });
                    urlEvent.fire();
                    console.log(response.getReturnValue());
                }
            }else if(response.getState() == 'ERROR'){
                window.location.href="/sample/s/loginpage";
                alert("Enter Correct Crendentails. Sign Up first if new user.");
            }
        })
        
        $A.enqueueAction(action);
    }
})