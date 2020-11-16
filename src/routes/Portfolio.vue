<template>
  <div class="row j-center">
            <div class="card" >
                    <div class="card-head"> my stuff </div>
                    <div class="row row-fill">
                        <nav class="card-body d-inline" v-for="item in ['pixel art', 'misc art', 'games', 'web dev', 'misc code']"
                            v-bind:key="item"
                        >
                             <a class="sm" v-on:click="portfolio_page = item"
                                v-bind:class="{'c-primary-d': portfolio_page == item}"
                             >
                                <span v-if="portfolio_page == item">> </span>
                                {{item}}
                                <span v-if="portfolio_page == item">&lt; </span>
                        </a>
                        </nav>
                    </div>

                    <div class="card-body">
                        
                        <div v-if="portfolio_page == 'pixel art'">
                            <div class="portfolio d-inline">
                                <h3>areas</h3>
                                <img src="../assets/img/portfolio/pixel/area1.png">
                                <img src="../assets/img/portfolio/pixel/area2.png">
                                <img src="../assets/img/portfolio/pixel/area3.png">
                                <img src="../assets/img/portfolio/pixel/area4.png">
                                <img src="../assets/img/portfolio/pixel/area5.png">
                                <img src="../assets/img/portfolio/pixel/area6.png">
                                <h3>animation</h3>
                                <img src="../assets/img/portfolio/pixel/anim1.gif">
                                <img src="../assets/img/portfolio/pixel/anim2.gif">
                                <img src="../assets/img/portfolio/pixel/anim3.gif">
                                <img src="../assets/img/portfolio/pixel/anim4.gif">
                                <img src="../assets/img/portfolio/pixel/anim5.gif">
                                <img src="../assets/img/portfolio/pixel/anim.gif">
                                <h3>rpg enemies</h3>
                                <img src="../assets/img/portfolio/pixel/enemy1.png">
                                <img src="../assets/img/portfolio/pixel/enemy2.png">
                                <img src="../assets/img/portfolio/pixel/enemy3.png">
                                <img src="../assets/img/portfolio/pixel/enemy4.png">
                                <img src="../assets/img/portfolio/pixel/enemy5.png">
                                <img src="../assets/img/portfolio/pixel/enemy6.png">
                                <img src="../assets/img/portfolio/pixel/enemy7.png">
                                <img src="../assets/img/portfolio/pixel/enemy8.png">
                                <img src="../assets/img/portfolio/pixel/enemy9.png">
                                <h3>tilesets</h3>
                                <img src="../assets/img/portfolio/pixel/tileset1.png">
                                <img src="../assets/img/portfolio/pixel/tileset2.png">
                                <img src="../assets/img/portfolio/pixel/tileset3.png">
                                <img src="../assets/img/portfolio/pixel/tileset4.png">
                                <img src="../assets/img/portfolio/pixel/tileset5.png">
                                <img src="../assets/img/portfolio/pixel/tileset6.png">
                                <h3>trees</h3>
                                <img src="../assets/img/portfolio/pixel/tree1.png">
                                <img src="../assets/img/portfolio/pixel/tree2.png">
                                <img src="../assets/img/portfolio/pixel/tree3.png">
                                <img src="../assets/img/portfolio/pixel/tree4.png">
                            </div>
                        </div>

                        <div v-if="portfolio_page == 'misc art'">
                            <div class="portfolio d-inline">
                                <h3>vector</h3>
                                <img src="../assets/img/portfolio/art/vector1.png">
                                <img src="../assets/img/portfolio/art/vector2.png">
                                <img src="../assets/img/portfolio/art/vector3.png">
                                <img src="../assets/img/portfolio/art/vector4.png">
                                <img src="../assets/img/portfolio/art/vector5.png">
                                <img src="../assets/img/portfolio/art/vector6.png">
                                <img src="../assets/img/portfolio/art/vector7.png">
                                <h3>illustration</h3>
                                <img src="../assets/img/portfolio/art/illus1.png">
                                <img src="../assets/img/portfolio/art/illus2.png">
                                <img src="../assets/img/portfolio/art/illus3.png">
                                <img src="../assets/img/portfolio/art/illus4.png">
                                <img src="../assets/img/portfolio/art/illus5.png">
                                <h3>comic illustration</h3>
                                <img src="../assets/img/portfolio/art/comic1.png">
                                <img src="../assets/img/portfolio/art/comic2.png">
                                <img src="../assets/img/portfolio/art/comic3.png">
                                <br>
                                ^^ april fools' collaborration with <a href="https://tapas.io/series/skeletons-in-the-closet">
                                nanette ferlito</a>
                                <br>
                                <img src="../assets/img/portfolio/art/comic4.png">
                                <img src="../assets/img/portfolio/art/comic5.png">
                                <img src="../assets/img/portfolio/art/comic6.png">
                                <h3>cullinary</h3>
                                <img src="../assets/img/portfolio/art/burrito.png">
                                <br>its not a phase
                            </div>
                        </div>

                        <div v-if="portfolio_page == 'games'">

                            <div class="card-body d-inline">
                                
                                <div class="row-fill row-wrap">
                                    <div class="col col-7">
                                        <h3>yard tale</h3>
                                        <strong>march-april 2018</strong> <br>
                                        <strong>roles</strong> UI/UX, trailer, presskit site <br>
                                        <strong>tech</strong> unity3d / c# <br>
                                        <a href="https://garbagegal.itch.io/yard-tale">link</a>
                                    </div>
                                    <div class="col col-5">
                                        <img src="../assets/img/portfolio/games/yardtale.gif">
                                    </div>
                                    <div class="col col-12">
                                        first game released under froiktown.  a fun and quirky game 
                                        about using magic to help make sales at a local yard sale. 
                                    </div>
                                </div>

                                <div class="row-wrap">
                                    <div class="col col-7">
                                        <h3>Cryptid Low-cation</h3>
                                        <strong>july 2018</strong> <br>
                                        <strong>roles</strong> game code, netcode, some textures, design <br>
                                        <strong>tech</strong> unity3d/c#, php, mysql <br>
                                        <a href="https://tuckie.itch.io/cryptid-low-cation">link</a>
                                    </div>
                                    <div class="col col-5">
                                        <img src="../assets/img/portfolio/games/cryptid.gif">
                                    </div>
                                    <div class="col col-12">
                                        cryptid low-cation is the MMO we deserve.
                                        make a cryptid to live on the digital plane forever, and 
                                        interact with the denizens who already exist. Your characters 
                                        are uploaded online for future players to see and interact 
                                        with so be nice ok :) <br>
                                        i put together a php server / mysql db and handled hooking it into
                                        unity to store created characters online
                                    </div>
                                </div>

                                <div class="row-wrap">
                                    <div class="col col-7">
                                        <h3>lovely gwepos</h3>
                                        <strong>june 2018</strong> <br>
                                        <strong>roles</strong> art, code, design<br>
                                        <strong>tech</strong> unity3d/c# <br>
                                        <a href="https://tuckie.itch.io/lovely-gwepos">link</a>
                                    </div>
                                    <div class="col col-5">
                                        <img src="../assets/img/portfolio/games/gwepos.gif">
                                    </div>
                                    <div class="col col-12">
                                        lovely gwepos was my first unity game - made in about a week
                                        for a pigsquad summer game jam. its sort of a survival horror(?)
                                        game where you take care of virtual pets. theyre usually chill
                                        if you keep the lights on and feed them enough
                                    </div>
                                </div>

                                <div class="row-wrap">
                                    <div class="col col-7">
                                        <h3>jun10 meditation</h3>
                                        <strong>june 2019</strong> <br>
                                        <strong>roles</strong> art, code, design<br>
                                        <strong>tech</strong> unity3d/c# <br>
                                        <a href="https://tuckie.itch.io/jun-10-meditation">link</a>
                                    </div>
                                    <div class="col col-5">
                                        <img src="../assets/img/portfolio/games/jun10.gif">
                                    </div>
                                    <div class="col col-12">
                                        this game was part of a collaborative project called <a href="https://meditations.games/index.php">Meditations.</a> 
                                        each collaborator chose one day of the year to make a game about, 
                                        and a launcher automatically loads each days game for you on launch.
                                        my submission details june 10th, the day after my birthday, and is a 
                                        short game about a kid the restraint it takes to not immediately spend
                                        gift cards right after you got real presents
                                    </div>
                                </div>

                                <div class="row-wrap">
                                    <div class="col col-7">
                                        <h3>why are you texting me right now</h3>
                                        <strong>jan 2019</strong> <br>
                                        <strong>roles</strong> art, code, design<br>
                                        <strong>tech</strong> unity3d/c#, php, mysql <br>
                                        <a href="https://tuckie.itch.io/why-are-you-texting-me-right-now">link</a>
                                    </div>
                                    <div class="col col-5">
                                        <img src="../assets/img/portfolio/games/texting.gif">
                                    </div>
                                    <div class="col col-12">
                                        this is another game that uses online features, made for the global 
                                        game jam 2019. you play the game both on your pc and phone, where you
                                        can use your phone to send text messages to the player character in-game.
                                        it never really went anywhere after the weekend i put the backend together
                                        but its a neat idea that i think could have some cool outcomes in
                                        other projects.
                                    </div>
                                </div>

                                <div class="row-wrap">
                                    <div class="col col-7">
                                        <h3>dj clips ultimate pipe dream</h3>
                                        <strong>unreleased</strong> <br>
                                        <strong>roles</strong> art, code, design<br>
                                        <strong>tech</strong> ruby <br>
                                    </div>
                                    <div class="col col-5">
                                        <img src="../assets/img/portfolio/games/djclips.gif">
                                    </div>
                                    <div class="col col-12">
                                        for a while i touted dj clips as mine main project but it is not
                                        currently in development. it was a jrpg about an esoteric musician
                                        from space and the cursed hat that wants to ruin his life. this was
                                        a really ambitious project, and quickly grew far too large for the 
                                        engine i was using at the time (rpgmaker)
                                    </div>
                                </div>

                                <div class="row-wrap">
                                    <div class="col col-7">
                                        <h3>i regret to inform you that you are not playing this game</h3>
                                        <strong>april 2019</strong> <br>
                                        <strong>roles</strong> art, code, design<br>
                                        <strong>tech</strong> html/js <br>
                                    </div>
                                    <div class="col col-5">
                                        <img src="../assets/img/portfolio/games/agent.jpg">
                                    </div>
                                    <div class="col col-12">
                                        this was my first attempt at a board game. in order to play,
                                        players needed to navigate to a website on their phones that
                                        told each player exactly what move to make each turn to win,
                                        except for one player who's instructions are just "act natural".
                                        the game unfolds into a social deduction where everyone wants 
                                        to determine which player is making legitimate choices on the board.
                                    </div>
                                </div>

                            </div>

                        </div>


                        <div v-if="portfolio_page == 'web dev'">

                            <div class="card-body d-inline">
                                
                                <div class="row-fill row-wrap">
                                    <div class="col col-7">
                                        <h3>dashboard site</h3>
                                        <strong>summer 2020</strong> <br>
                                        <strong>roles</strong> programmer, full stack<br>
                                        <strong>tech</strong> html/css, nodeJS, vue2, oracledb, bootstrap <br>
                                    </div>
                                    <div class="col col-5">
                                        <img src="../assets/img/portfolio/web/dashboard.png">
                                    </div>
                                    <div class="col col-12">
                                        summer internship project at Wafertech LLC. i was tasked with
                                        creating a production demo of a web-based dashboard application
                                        that can monitor the internal status of servers and other
                                        machines on the company network. data was provided to me on an 
                                        oracle database, and i made the backend server and frontend vue2 ui
                                        to navigate groups of machines and view pertinent info about them.
                                        screenshot data is altered for NDA purposes.
                                    </div>
                                </div>

                                <div class="row-fill row-wrap">
                                    <div class="col col-7">
                                        <h3>aregames.art design</h3>
                                        <strong>summer 2020</strong> <br>
                                        <strong>roles</strong> frontend<br>
                                        <strong>tech</strong> html/css/js (jquery)<br>
                                        <a href="https://aregames.art">link</a>
                                    </div>
                                    <div class="col col-5">
                                        <img src="../assets/img/portfolio/web/agda.png">
                                    </div>
                                    <div class="col col-12">
                                        aregames.art is a forum built on discourse - which allows you to
                                        customize css for the site to suit your forum better. I overwrote
                                        quite a lot of the stylesheets not only to give the site a better
                                        look, but to create an experience i felt fit more "classic forum"
                                        features, including a javascript widget to implement page numbers
                                        instead of infinite scroll, and another script secret >:)
                                    </div>
                                </div>

                                <div class="row-fill row-wrap">
                                    <div class="col col-7">
                                        <h3>personal portfolio site</h3>
                                        <strong>oct-nov 2020</strong> <br>
                                        <strong>roles</strong> all :) <br>
                                        <strong>tech</strong> html/css, nodeJS, vue/router <br>
                                    </div>
                                    <div class="col col-5">
                                        you're looking at it!
                                    </div>
                                    <div class="col col-12">
                                        the goal was to rebuild my portfolio site into a more modular design
                                        that can be updated more easily in the future. this site uses vue2 
                                        and vue-router to put together the site as a single page app with
                                        some responsive css design. i created a lightweight css framework
                                        i am calling twky.css that i can use across multiple projects. its like
                                        bootstrap, but looks cool!
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div v-if="portfolio_page == 'misc code'">

                            <div class="card-body d-inline">
                                
                                <div class="row-fill row-wrap">
                                    <div class="col col-7">
                                        <h3>background bot</h3>
                                        <strong>summer 2018</strong> <br>
                                        <strong>roles</strong> all<br>
                                        <strong>tech</strong> python <br>
                                        <a href="https://twitter.com/wavy_bgs">link</a>
                                    </div>
                                    <div class="col col-5">
                                        <img src="../assets/img/portfolio/misc/bg.gif">
                                    </div>
                                    <div class="col col-12">
                                        @wavy_bgs is a twitter bot written with pygame that randomly generates and tweets 
                                        out animated gifs reminiscant of battle backgrounds from earthbound 
                                    </div>
                                </div>

                                <div class="row-fill row-wrap">
                                    <div class="col col-7">
                                        <h3>peeki</h3>
                                        <strong>summer 2019</strong> <br>
                                        <strong>roles</strong> all :) <br>
                                        <strong>tech</strong> html/css, nodeJS, electron <br>
                                        <a href="https://twitter.com/bwuhhh/status/1161857120767057920">link</a>
                                    </div>
                                    <div class="col col-5">
                                        <img src="../assets/img/portfolio/misc/peeki.png">
                                    </div>
                                    <div class="col col-12">
                                        peeki is an unreleased pixel art editor i started developing to learn
                                        about nodejs and electron development. ive since had a few ideas for
                                        ways to improve the pixel art editing process for myself, so i may
                                        return to this project some day
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      portfolio_page: 'pixel art'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
