({
	getRecords : function(component,action) {
        
        let selectedCategory =  component.get('v.selectedCategory');
        let selectedDuration = component.get('v.selectedDuration');
        let selectedRelevance = component.get('v.selectedRelevance');
        var sPageURL = decodeURIComponent(window.location.search.substring(1));
        action.setParams({
            'filter1' : selectedCategory,
            'filter2' : selectedDuration,
            'filter3' : selectedRelevance,
            'pageUrl' : sPageURL
        });
        
        action.setCallback(this, function(response){
            
            if(response.getState()=='SUCCESS'){
                if(response.getReturnValue() == null){
                    window.location.href="https://finalorg404-developer-edition.ap24.force.com/sample/s/loginpage";
                }else{
                    component.set('v.videos',response.getReturnValue());
                }     
            }
        });
        
        $A.enqueueAction(action);
    }
})