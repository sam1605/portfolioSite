function generateMarkup (){
var markup='';
markup = 
    '<div class="" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">' +
    '<div class="dialog" role="document">' +
    '<div class="content">' +
    '<div class="d-flex header justify-content-between mb-3">' +
    '<div>' +
    '<h3 class="title txt" id="exampleModalLabel">Kagool Data</h3>' +
    '<h5 class="expTime">2022 - Present</h5>' +
    '</div>' +
    '<button type="button" class="" data-dismiss="modal" aria-label="Close" hidden>' +
    '<span aria-hidden="true">&times;</span>' +
    '</button>' +
    '</div>' +
    '<div class="body txt EMB">' +
    '<h4> Projects Worked On:</h4><br>' +
    '<div class="prj">'+
    '<h5 class="expTime">Konnect CRM System</h5>' +
    '<div class=" mb-2 d-flex gap-2 flex-row">'+
    '<div class="techUsed mr-1.5 mt-2">Dot NET MVC</div><div class="techUsed mr-1.5 mt-2">MS SQL</div> <br>' +
    '</div>'+
    '<ul>'+
    '<li>Developed a Timesheet project to track employee time booking with features like Leave</li>' +
    '<li>Management, Employee Management, and Project Management modules.<br></li>' +
    '<li>Generated PBI Reports monthly by calculating employee time bookings for each project.<br></li>' +
    '<li>Implemented an IT Service Management (ITSM) module that streamlined ticket issuance based on employee requests; improved ticket resolution speed by 40%.<br><br></li>' +
    '</ul>'+
    '</div>'+
    '<div class="prj">'+
    '<h5 class="expTime">Medical File Manager (ICU Medical & Smiths Medical)</h5>' +
    '<div class=" mb-2 d-flex gap-2 flex-row">'+
    '<div class="techUsed mr-1.5 mt-2">Dot NET MVC</div><div class="techUsed mr-1.5 mt-2"> MS SQL</div><br>' +
    '</div>'+
    '<ul>'+
    'Developed a global file-sharing application with Azure AD authentication and Oracle' +
    'Service Cloud integration. <br>' +
    'Key functionalities include file uploads using SASS tokens and version management for' +
    'each file.<br><br>' +
    '</ul>'+
    '</div>'+
    '<div class="prj">'+
    '<h5 class="expTime">SAP Chat Bot</h5>' +
    '<div class=" mb-2 d-flex gap-2 flex-row">'+
    '<div class="techUsed mr-1.5 mt-2">Dot NET MVC</div><div class="techUsed mr-1.5 mt-2">Node.js, MS SQL</div><br>' +
    '</div>'+
    '<ul>'+
    'Integrated custom APIs to fetch vendor, warehouse, and shipping data from SAP,' +
    'automating data retrieval through a chatbot developed using C# and the Microsoft Bot' +
    'Framework.<br><br>' +
    '</ul>'+
    '</div>'+
    '<div class="prj">'+
    '<h5 class="expTime">Intelligent Data Platform Portal (Al Futtaim Group)</h5>' +
    '<div class=" mb-2 d-flex gap-2 flex-row">'+
    '<div class="techUsed mr-1.5 mt-2">Dot NET MVC</div><div class="techUsed mr-1.5 mt-2"> Node.js</div><div class="techUsed mr-1.5 mt-2"> MS SQL DB</div><div class="techUsed mr-1.5 mt-2">MongoDB</div> <br>' +
    '</div>'+
    '<ul>'+
    'Developed a metadata-driven framework as an alternative to Microsoft Azure Data' +
    'Factory, providing enhanced data manipulation capabilities. <br>' +
    'Created robust data pipelines to ingest and transform data from multiple sources, with' +
    'real-time updates and data insights presented through tables, graphs, and reports. <br>' +
    'Implemented role-based access control and centralized access management. <br><br>' +
    '</ul>'+
    '</div>'+
    '</div>' +
    '<div class="footer mt-5">' +
    '<button type="button" class="btn close btn-secondary"' +
    'data-dismiss="modal">Close</button>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>'
    return markup;
}
