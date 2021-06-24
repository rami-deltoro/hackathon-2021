$(document).ready(function(){
    const tableHeader = "<thead>" +
        "                                        <tr>" +
        "                                            <th>Name</th>" +
        "                                            <th>Position</th>" +
        "                                            <th>Office</th>" +
        "                                            <th>Age</th>" +
        "                                            <th>Start date</th>" +
        "                                            <th>Salary</th>" +
        "                                        </tr>" +
        "                                    </thead>";

    const tableFooter = "<tfoot>" +
        "                                        <tr>" +
        "                                            <td><strong>Name</strong></td>" +
        "                                            <td><strong>Position</strong></td>" +
        "                                            <td><strong>Office</strong></td>" +
        "                                            <td><strong>Age</strong></td>" +
        "                                            <td><strong>Start date</strong></td>" +
        "                                            <td><strong>Salary</strong></td>" +
        "                                        </tr>" +
        "                                    </tfoot>";
    $("#dataTable").append(tableHeader);
    $("#dataTable").append("<tbody>");

    const data = [{"Name":"abc","Position":"def","Office":"hij","Age":"24","Start_date":"2008/11/28","Salary":"$162,700"},
        {"Name":"abc","Position":"def","Office":"hij","Age":"24","Start_date":"2008/11/28","Salary":"$162,700"},
        {"Name":"abc","Position":"def","Office":"hij","Age":"24","Start_date":"2008/11/28","Salary":"$162,700"},
        {"Name":"abc","Position":"def","Office":"hij","Age":"24","Start_date":"2008/11/28","Salary":"$162,700"}];

    $.each(data, function(key, value) {
        var tr = $("<tr>");
        tr.append($("<td>").text(value.Name));
        tr.append($("<td>").text(value.Position));
        tr.append($("<td>").text(value.Office));
        tr.append($("<td>").text(value.Age));
        tr.append($("<td>").text(value.Start_date));
        tr.append($("<td>").text(value.Salary));
        $("#dataTable").append(tr);
    });
    $("#dataTable").append("</tbody>");
    $("#dataTable").append(tableFooter);

});