


Template.newContenderForm.events({
    submit : function(event){
      event.preventDefault();
      console.log("sweg");
      //ajoute un nouveau contender a partir de


      Meteor.call('insertContender',{name : $('#contenderInput').val()});
      $('#contenderInput').val("");

    }
});

Template.contenders.events({
    click : function(event){
      event.preventDefault();
      Meteor.call('incrementScore',{_id : $(this)[0]._id});
    }
});

Template.contenders.helpers({
  contenders : function(){
    return Contenders.find({},{sort:{score:-1}});
  }
})
