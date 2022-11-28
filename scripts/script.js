
const sections = {
    home:` <!--Home page-->   
    <section id="home" class="py-5">
      <div class=" home-top text-white">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 text-center">
              <h1 class="display-2 mt-5 pt-5">
                Welcome to Radwa's Portfolio!...
              </h1>
              <p class="lead">Full stack web developer in progress.</p>
              <a href="javascript:showSection('about');" class="btn btn-outline-secondary btn-sm text-white">
                <i class="fas fa-arrow-right"></i> Read More
              </a>
            </div>
            <div class=" mt-5  col-lg-6 text-center">
              <img src="images/profile-picture.jpg" alt="Profile picture" class="img-fluid d-none d-lg-block">
            </div>          
          </div>
        </div>
      </div>
    </section>`,
    about:`<!-- About Section -->
    <section id="about" class="py-5 bg-light text-center">
      <div class="container">
          <div class="row">
            <div class="col">
              <div class="info-header mb-5">
                <h1 class="text-primary pb-3">
                  Who Am I?
                </h1>
                <p class="lead pb-3">
                  My name is Radwa Aboudina. I am a current student in the MIT Full stack web development program. <br><br>
                  <a href="./hashDemoBlockies/hashDemoBlockies.html" class="btn btn-outline-secondary btn-sm text-dark">
                    <i class="fas fa-arrow-right"></i> See your name in blockies
                  </a>
                </p>              
                <img src="images/my_name_in_blockies.jpg" alt="Blockies" class="img-fluid d-none d-lg-block">
              </div>
            </div>
          </div>
      </div>
    </section>`,
    work:`<!-- My Work -->
    <section id="work" class="my-5 text-center">    
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="info-header mb-5">
                <h1 class="text-primary pb-3">
                    My work
                </h1>
                </div>
            </div>
            </div>
            <!--Tutorial-->
            <div class="row">
            <div class="col-lg-3 col-md-6">
                <div class="card">
                <div class="card-body">
                    <img src="images/github-tutorial.jpg" alt="Github tutorial" class="img-fluid w-50 h-30 mb-3">
                    <h3>Github Tutorial</h3>
                    <p>A simple tutorial that explains how to create a personal webpage on Github for beginners.</p>
                    <div class="d-flex justify-content-center">
                    <a class="text-muted" href="javascript:showProject(projects.tutorial);">See more...</a>     
                    </div>
                </div>
                </div>
            </div>
            <!--The seven wonders-->
            <div class="col-lg-3 col-md-6">
                <div class="card ">
                <div class="card-body">
                    <img src="images/Pyramid.jpg" alt="The seven wonder" class="img-fluid w-50 h-30 mb-3">
                    <h3>The Seven Wonders</h3>
                    <p>My first attempt to create a web page with the basic HTML elements.</p>
                    <div class="d-flex justify-content-center">
                    <a class="text-muted" href="javascript:showProject(projects.wonders);">See more...</a>                
                    </div>
                </div>
                </div>
            </div>
            <!--Crasy balls-->
            <div class="col-lg-3 col-md-6">
                <div class="card">
                <div class="card-body">
                    <img src="images/crazy-balls.jpg" alt="Crazy Balls" class="img-fluid w-50 h-30 mb-3">
                    <h3>Crazy Balls</h3>
                    <p>My first attempt to use Javascript with HTML, functions, shapes, and timers.</p>
                    <div class="d-flex justify-content-center">
                    <a class="text-muted" href="javascript:showProject(projects.balls);">See more...</a>                
                    </div>
                </div>
                </div>
            </div>
            <!--Eyes-->
            <div class="col-lg-3 col-md-6">
                <div class="card">
                <div class="card-body">
                    <img src="images/eyes.jpg" alt="Eyes" class="img-fluid w-50 h-30 mb-3">
                    <h3>Eyes</h3>
                    <p>Two eyes following the mouse movement on the screen.</p>
                    <div class="d-flex justify-content-center">
                    <a class="text-muted" href="javascript:showProject(projects.eyes);">See more...</a>                
                    </div>
                </div>
                </div>
            </div>
            <!--PacMen-->
            <div class="col-lg-3 col-md-6">
                <div class="card">
                <div class="card-body">
                    <img src="images/pacmen.jpg" alt="PacMen" class="img-fluid w-50 h-30 mb-3">
                    <h3>PacMen</h3>
                    <p>Pacmen created on demand and moved across the page changing direction when they hit the edges of the window.</p>
                    <div class="d-flex justify-content-center">
                    <a class="text-muted" href="javascript:showProject(projects.pacMen);">See more...</a>                
                    </div>
                </div>
                </div>
            </div>
            <!--Bus Tracking-->
            <div class="col-lg-3 col-md-6">
                <div class="card">
                <div class="card-body">
                    <img src="images/bus-tracking.jpg" alt="Bus tracking" class="img-fluid w-50 h-30 mb-3">
                    <h3>Real Time Bus Tracking</h3>
                    <p>An excercise that uses MBTA bus data to determine stops between Harvard and MIT, and adds animated marker on the map to highlight the bus routes.</p>
                    <div class="d-flex justify-content-center">
                    <a class="text-muted" href="javascript:showProject(projects.busTracking);">See more...</a>                
                    </div>
                </div>
                </div>
            </div>
            <!--Boston city data-->
            <div class="col-lg-3 col-md-6">
                <div class="card">
                <div class="card-body">
                    <img src="images/boston.jpg" alt="Boston City - http://www.city-data.com/picfilesc/picc22047.php" class="img-fluid w-50 h-30 mb-3">
                    <h3>Boston City Data</h3>
                    <p>A page that displays the number of people working in the city of Boston who earn over $200,000 and the top five earners, using JSON (JavaScript Object Notation) to accees the Boston city data and created.</p>
                    <div class="d-flex justify-content-center">
                    <a class="text-muted" href="javascript:showProject(projects.bostonCityData);">See more...</a>                
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </section>`,
    contact:`<!-- Contact -->
    <div id="contact" class="bg-light py-5">
    <div class="container">
        <div class="row">
        <div class="col">
            <div class="info-header mb-5">
            <h1 class="text-primary pb-3">
                Get In Touch
            </h1>            
            </div>
        </div>
        </div>
        <div class="row">

        <form action="#">
            <div class="input-group input-group-lg mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">
                <i class="fas fa-user-alt"></i>
                </span>
            </div>
            <input type="text" name="name" id="name" class="form-control" placeholder="Name">
            </div>

            <div class="input-group input-group-lg mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">
                <i class="fas fa-envelope"></i>
                </span>
            </div>
            <input type="email" name="email" id="email" class="form-control" placeholder="Email">
            </div>

            <div class="input-group input-group-lg mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">
                <i class="fas fa-pencil-alt"></i>
                </span>
            </div>
            <textarea name="message" id="message" class="form-control" rows="5" placeholder="Your Message"></textarea>
            </div>

            <input type="submit" value="Submit" class="btn btn-primary btn-block btn-lg">
        </form>       
        </div>
    </div>
    </div>`    
    };

const projects = {
    tutorial:"https://raboudina.github.io/Github-Tutorial/",
    wonders:"https://raboudina.github.io/The-Seven-Wonders/",
    balls:"https://raboudina.github.io/Crazy-Balls/",
    eyes:"https://raboudina.github.io/Eyes/",
    pacMen:"https://raboudina.github.io/PacMen/",
    busTracking:"https://raboudina.github.io/Real-Time-Bus-Tracking/",
    bostonCityData:"https://raboudina.github.io/Boston-City-Data/",
}

function showSection(section){
        switch(section) {
        case "home":
          setMain(sections.home);
        break;
        case "about":
          setMain(sections.about);
        break;
        case "work":
          setMain(sections.work);
        break;
        case "contact":
          setMain(sections.contact);
        break;
        case "wonders":
          setMain(sections.wonders);
        break;
        default:
          setMain(sections.home);
        }; 
}

function showProject(project){       
    setMain('<object type="text/html" floot="left" width="100%" height="500px" data="'+project+'" ></object>');      
}

function setMain(content){
        let toggleButton=document.getElementById("toggleButton");
        if(toggleButton.getAttribute('aria-expanded') == "true"){
          toggleButton.click();
        }
        window.scrollTo(0,0);
        document.getElementById("main").innerHTML = content;
   
}