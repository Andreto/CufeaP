var dataObj={'featured_project':prompt('Enter project-id:')};
$.ajax({
  dataType:'html',
  contentType:'application/json;charset=utf-8',
  type:'PUT',
  url:'https://scratch.mit.edu/site-api/users/all/'+Scratch.INIT_DATA.PROFILE.model.id+'/',
  data:JSON.stringify(dataObj)
});
$(document).ajaxComplete(function(){location.reload();});
