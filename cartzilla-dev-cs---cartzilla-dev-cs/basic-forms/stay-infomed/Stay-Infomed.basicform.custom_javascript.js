$("document").ready(function(){
    if($("#EntityFormControl_EntityFormView").length > 0){
        var cancelButton = $("<input type='button' id='btnCancel' value='Cancel' class='btn btn-primary' style='float:left; margin-left:0px;' />");
        $("#InsertButton").after(cancelButton);
        $("#btnCancel").on("click",function(){
            cancelButtonHandler();
        });

        function cancelButtonHandler(){
            parent.$("#createApplicationModal").css("display", "none");
            $("div.modal-backdrop.fade.in",parent.document).removeClass('in');
            $("div.modal-backdrop.fade",parent.document).removeClass("modal-backdrop");
        }
    }
})