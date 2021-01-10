({
    getPackages : function(component,action) {
        
        action.setCallback(this, function(response){
            
            if(response.getState()=='SUCCESS'){
                component.set('v.packages',response.getReturnValue());
            }           
        });
        
        $A.enqueueAction(action);
    }
    
})