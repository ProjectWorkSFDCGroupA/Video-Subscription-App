({
    checkValid : function(component, event, helper) {
        var action = component.get('c.checkAuth');
        helper.checklogin(action,component, event);   
    },
    
    redSignup : function(component, event, helper) {
        window.location.href="https://finalorg404-developer-edition.ap24.force.com/sample/s/signup?app=commeditor";
    }
    
})