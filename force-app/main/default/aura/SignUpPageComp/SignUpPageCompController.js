({
    doInit: function(component, event, helper) {
        component.find("customerRecordCreator").getNewRecord(
            "Customer__c", 
            null,      
            false,     
            $A.getCallback(function() {
                var rec = component.get("v.customer");
            })
        );
    },
    handleSaveCustomer : function(component, event, helper) {
        if(helper.validateCustomerForm(component)) {
            component.set("v.simpleNewContact.AccountId", component.get("v.recordId"));
            component.find("customerRecordCreator").saveRecord(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                    $A.get('e.force:showToast').setParams({
                        "title": "Success!!!",
                        "message": "You have Successfully Registered",
                        "type": "success",
                        "duration":"5000"
                    }).fire();
                    window.location.href="/sample/s/loginpage";
                }
                else if (saveResult.state === "ERROR") {
                    alert("Enter Correct Credentails.");
                    console.log('Problem saving contact, error: ' +
                                JSON.stringify(saveResult.error));
                }
            });
        }
    },
    redLogin : function(component, event, helper) {
        window.location.href="/sample/s/loginpage";
    }
})