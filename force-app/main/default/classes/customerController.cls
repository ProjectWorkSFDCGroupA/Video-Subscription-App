public class customerController {
    
    @AuraEnabled
    public static String checkAuth(String passKey, String email){
        String cusId;
        for(Customer__c customer:  [SELECT Id,Name, Is_Valid__c FROM Customer__c WHERE Pass_Key__c =:passKey AND Email__c =:email]){
            if(customer != null){
                if(customer.Is_Valid__c == true){
                    cusId = customer.Id;
                }else if(customer.Is_Valid__c == false){
                    cusId = customer.Id + '?n';
                } else{
                    cusId = null;
                }
            }else{
                cusId = null;
            }
        }        
        return cusId;
    }  
    
    @AuraEnabled
    public static Customer__c checkPayment(Id recId){
        System.debug(recId);
        Customer__c cus = new Customer__c();
        List<Customer__c> customer = [SELECT Name FROM Customer__c WHERE Id  = :recId];
        cus = customer.get(0);
        return cus;
    } 
    
    @AuraEnabled
    public static List<Video_Detail__c> getVideos(String filter1,String filter2,String filter3,String pageUrl){
        List<Customer__c> customer = [SELECT Is_Valid__c FROM Customer__c WHERE Id =:pageUrl]; 
        List<Video_Detail__c> videoList = new List<Video_Detail__c>();
        
        for(Customer__c c : customer){
            if(c.Is_Valid__c == true){
                videoList = [SELECT Name__c,Category__c,Released_Date__c,Video_URL__c,Duration__c,Picture_URL__c FROM Video_Detail__c];
            }else{
                videoList = null;
            }
        }
        return videoList;
    }
    
    @AuraEnabled
    public static List<Video_Detail__c> getFilteredVideos(String filter1,String filter2,String filter3,String pageUrl){
        
        List<Customer__c> customer = [SELECT Is_Valid__c FROM Customer__c WHERE Id =:pageUrl];       
        String query = 'SELECT Name__c,Category__c,Released_Date__c,Video_URL__c,Duration__c,Picture_URL__c FROM Video_Detail__c WHERE ';
        String order = '';
        
        if(filter3 == 'uploadDate'){
            order = 'ORDER BY Released_Date__c DESC';
        }
        
        List<Video_Detail__c> results = new List<Video_Detail__c>();
        
        query = query + 'Category__c LIKE \''+filter1+'\' AND Duration__c LIKE \''+filter2+'\' '+order;
        
        for(Customer__c c : customer){
            if(c.Is_Valid__c == true){
                results = Database.query(query);
            }else{
                results = null;
            }
        }
        return results;
    }
    
    @AuraEnabled
    public static List<Packages__c> getPackages(){
        
        List<Packages__c> packages = Packages__c.getAll().values();
        return packages;
    }

}