({
    doInit : function(component, event, helper) {
        let action = component.get('c.getVideos');
        helper.getRecords(component,action,event);
        var sPageURL = decodeURIComponent(window.location.search.substring(1));
        var sURLVariables = sPageURL.split('?');          
        if(sPageURL == ''){
            window.location.href="https://finalorg404-developer-edition.ap24.force.com/sample/s/loginpage";
        }
        else{    
            component.set("v.recId",sURLVariables[0]);    
        }       
    },
    
    onChange : function(component,event, helper){
        let action = component.get('c.getFilteredVideos');
        helper.getRecords(component,action,event);
    },
    
    handleEvent : function(component,event, helper){
        var video = event.getParam("video");
        component.set("v.selectedVideo", video);
        component.set("v.isOpen", true); 
    },
    
    handleApplicationEvent : function(component,event, helper){
        var video = event.getParam("video");
        component.set("v.selectedVideocase", video);
        component.set("v.isCaseOpen", true); 
        console.log(JSON.stringify(video));
        console.log("handled case");
    }
})