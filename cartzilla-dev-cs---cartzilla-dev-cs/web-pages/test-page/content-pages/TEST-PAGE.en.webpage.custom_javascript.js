function ExecuteWorkflow() {
var correspodenceId = Xrm.Page.data.entity.getId(); // case guid
var workflowId = "{4883a19c-ea83-46ed-a73e-a3bd400e51c8}"; //Replace your workflow id here. workflowId is fixed because of solution transfer and it is not going to change with environment.
var functionName = "ExecuteWorkflow: "; //function name
var query = "";
try {
//Define the query to execute the worklfow
query = "workflows(" + workflowId.replace("}", "").replace("{", "") + ")/Microsoft.Dynamics.CRM.ExecuteWorkflow";
var data = {
"EntityId": correspodenceId
};
//Create a request
var req = new XMLHttpRequest();
req.open("POST", Xrm.Page.context.getClientUrl() + "/api/data/v9.0/" + query, false);
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.onreadystatechange = function () {
if (this.readyState == 4 /* complete */) {
req.onreadystatechange = null;
if (this.status == 200) {
                //success callback this returns null since no return value available.
                var result = JSON.parse(this.response);

            } else {
                //error callback
                var error = JSON.parse(this.response).error;
            }
        }
    };
    req.send(JSON.stringify(data));
} catch (e) {
    alert('An error has occurred - Function name:' + functionName + 'Error:' + e) //throw exception
}
}