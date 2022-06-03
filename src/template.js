
const generateTeam = Team => {
    
    const generateManager = manager => {
        return`
        <div class="row row-cols-1">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">${manager.getName()}</h2>
              <h3 class="card-subt">${manager.getRole()}</h3>
              <ul>
                <li class="list-item-group"> ID: ${manager.getId()}
                <li class="list-item-group"> Email: ${manager.getEmail()}
                <li class="list-item-group">${manager.getOfficeNumber()}
              </ul>
            </div>
          </div>
        </div>`;
    };

    const generateEngineer = Engineer => {
        return`
        <div class="row row-cols-1">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">${Engineer.getName()}</h2>
              <h3 class="card-subt">${Engineer.getRole()}</h3>
              <ul>
                <li class="list-item-group"> ID: ${Engineer.getId()}
                <li class="list-item-group"> Email: ${Engineer.getEmail()}
                <li class="list-item-group">${Engineer.getGithub()}
              </ul>
            </div>
          </div>
        </div>`;
    };

    const generateIntern = Intern => {
        return`
        <div class="row row-cols-1">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">${Intern.getName()}</h2>
              <h3 class="card-subt">${Intern.getRole()}</h3>
              <ul>
                <li class="list-item-group"> ID: ${Intern.getId()}
                <li class="list-item-group"> Email: ${Intern.getEmail()}
                <li class="list-item-group">${Intern.getSchool()}
              </ul>
            </div>
          </div>
        </div>`;
    };
    const html = [];

    html.push(Team
        .filter(employee => employee.getRole() === "manager")
        .map(manager => generateManager(manager))
    );
    html.push(Team
        .filter(employee => employee.getRole() === "engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(Team
        .filter(employee => employee.getRole() === "intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

module.exports = Team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                    <h1 class="text-center text-white">My Team</h1>
                </div>
            </div>
        </div>
    
        <div class="container-fluid" id="card-container">
            ${generateTeam(Team)}
        </div>
    </body>
    `;
};




