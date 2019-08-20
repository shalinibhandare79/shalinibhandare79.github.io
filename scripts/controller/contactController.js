contactModule.controller("contactController",function($scope,$http,$filter){    
  
  //Get contact list
  $scope.getList=function()
  {
    $scope.favFlag = false;
    $http.get("../media/contact.json")
    .then(function(response) {
    $scope.contactInfo = response.data.adformat;    
    $scope.count = $scope.contactInfo.length;
    });
  }
  $scope.getList();

      var vm = this;
      vm.name = 'test';

      vm.setOptions = function() {
        toastr.options.positionClass = "toast-top-right";
        toastr.options.closeButton = true;
        toastr.options.showMethod = 'slideDown';
        toastr.options.hideMethod = 'slideUp';
      };

      vm.setOptions();

      $scope.showToast = function(type) {
        var msg="";
        switch (type) {
          case 'add':
            msg = "Added Successfully"
            break;
            case 'del':
            msg = "Deleted Successfully"
            break;
            case 'edit':
            msg = "Edited Successfully"
            break;
        
          default:
            msg = "Action successful"
            break;
        }
        toastr.info(msg);
      };
      
  

  $scope.updateFlag = false;

  $scope.favFlag = false;
  
  // Remove contact
  $scope.removeItem = function(x)
  {
    for(let i=0;i<$scope.contactInfo.length;i++){
      if($scope.contactInfo[i].id == x){
        $scope.contactInfo.splice(i,1);
      }
    }
    $scope.showToast('del');

    //console.log("length",$scope.contactInfo)
    
  }

  // Add contact
  $scope.add = function(tempContacts)
  {
    $scope.updateFlag = false;  
    //console.log(tempContacts);    
    tempContacts.id = $scope.count++;
    $scope.contactInfo.push(tempContacts);
    
    $scope.showToast('add');
  }

  
  //Edit contact
	 $scope.openEdit = function(selectedContact){ 
     //console.log("in edit i",selectedContact)
     $scope.updateFlag = true;
     $scope.selectedIndex = selectedContact;
     
     for(let j=0;j<$scope.contactInfo.length;j++){
      if($scope.contactInfo[j].id == selectedContact){
        $scope.contacts = $scope.contactInfo[j]; 
        $scope.contacts.phone_no = parseInt($scope.contactInfo[j].phone_no)
        $scope.contacts.secondary_no = parseInt($scope.contactInfo[j].secondary_no);
        break;
      }
    }    
    
   }
  
   $scope.updateContact = function(i)
   {  
      $scope.contactInfo[i]= $scope.contacts; 
      
      $scope.showToast('edit');
   }

   //view contact
   $scope.view = function(i)
   {
      $scope.selectedIndex = i;

      for(let j=0;j<$scope.contactInfo.length;j++){
        if($scope.contactInfo[j].id == i){
          $scope.contacts = $scope.contactInfo[j];
          break;
        }
      }     
      
   }

   //reset contacts
   $scope.reset = function(){   
    $scope.updateFlag = false;   
     $scope.contacts = {}
   }

   //Favourites
   $scope.favourites = function()
   {
    $scope.favFlag = true;
    $scope.contactInfo = $filter('filter')($scope.contactInfo, {'addAsFavaurite': 'Yes'})
   }
  
   //search by name
   $scope.searchFilter = function(){
     $scope.searchValue = $scope.test;
   }
})