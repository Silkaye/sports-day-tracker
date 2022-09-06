<template>
<main class="eventsSDT">
    <div class="container is-fluid">
        <div class="option-title">Events</div>

        <section>
            <div class="columns is-multiline is-centered is-vcentered">
                <div class="column is-one-quarter-widescreen is-one-third-desktop is-one-third-tablet has-text-centered">
                    <router-link to="/Events/High-Jump">
                        <div class="tile is-parent has-text-centered">
                            <div class="event-card">
                                <figure class="image has-image-centered">
                                    <img :src="highjump"/>
                                </figure>
                                <div class="columns is-centered">
                                    <div class="card-content">
                                        <p class="card-header-title is-centered is-size-2 is-family-sans-serif">High Jump</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <div class="column is-one-quarter-widescreen is-one-third-desktop is-one-third-tablet has-text-centered">
                    <router-link to="/Events/Long-Jump">
                        <div class="tile is-parent has-text-centered">
                            <div class="event-card">
                                <figure class="image has-image-centered">
                                    <img class="has ratio" :src="longJump"/>
                                </figure>
                                <div class="columns is-vcentered is-centered">
                                    <div class="card-content">
                                        <p class="card-header-title is-centered is-size-2 is-family-sans-serif">Long Jump</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </router-link>
                </div>

                <div class="column is-one-quarter-widescreen is-one-third-desktop is-one-third-tablet has-text-centered">
                    <router-link to="/Events/Long-Distance">
                        <div class="tile is-parent has-text-centered">
                            <div class="event-card">
                                <figure class="image has-image-centered">
                                    <img class="has ratio" :src="longDistance"/>
                                </figure>
                                <div class="columns is-vcentered is-centered">
                                    <div class="card-content longDistance">
                                        <p class="card-header-title is-centered is-size-2 is-family-sans-serif">Long Distance</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </router-link>
                </div>

                <div class="column is-one-quarter-widescreen is-one-third-desktop is-one-third-tablet has-text-centered">
                    <router-link to="/Events/Shotput">
                        <div class="tile is-parent has-text-centered">
                            <div class="event-card">
                                <figure class="image has-image-centered">
                                    <img class="has ratio" :src="shotput"/>
                                </figure>
                                <div class="columns is-vcentered is-centered">
                                    <div class="card-content">
                                        <p class="card-header-title is-centered is-size-2 is-family-sans-serif">Shotput</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <div class="column is-one-quarter-widescreen is-one-third-desktop is-one-third-tablet has-text-centered">
                    <router-link to="/Events/Sprints">
                        <div class="tile is-parent has-text-centered">
                            <div class="event-card">
                                <figure class="image has-image-centered">
                                    <img class="has ratio" :src="sprints"/>
                                </figure>
                                <div class="columns is-vcentered is-centered">
                                    <div class="card-content">
                                        <p class="card-header-title is-centered is-size-2 is-family-sans-serif">Sprints</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </router-link>
                </div>

                <div class="column is-one-quarter-widescreen is-one-third-desktop is-one-third-tablet has-text-centered">
                    <router-link to="/Events/Discus">
                        <div class="tile is-parent has-text-centered">
                            <div class="event-card">
                                <figure class="image has-image-centered">
                                    <img class="has ratio" :src="discus"/>
                                </figure>
                                <div class="columns is-vcentered is-centered">
                                    <div class="card-content">
                                        <p class="card-header-title is-centered is-size-2 is-family-sans-serif">Discus</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                </router-link>
                </div>

                <div class="column is-one-quarter-widescreen is-one-third-desktop is-one-third-tablet has-text-centered">
                    <router-link to="/Events/Ball-Games">
                        <div class="tile is-parent has-text-centered">
                            <div class="event-card">
                                <figure class="image has-image-centered">
                                    <img :src="ballGames"/>
                                </figure>
                                <div class="columns is-vcentered is-centered">
                                    <div class="card-content">
                                        <p class="card-header-title is-centered is-size-2 is-family-sans-serif">Ball Games</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            
            </div>
        </section>
    </div>
</main>
</template>

<script>
import highjump from "../assets/images/highjump.png"
import shotput from "../assets/images/shotput.png"
import sprints from "../assets/images/sprints.png"
import longJump from "../assets/images/longJump.png"
import longDistance from "../assets/images/longDistance.png"
import relays from "../assets/images/relays.png"
import ballGames from "../assets/images/ballGames.png"
import discus from "../assets/images/discus.png"

export default {
    data() {
        return {
            highjump,
            shotput,
            sprints,
            longJump,
            longDistance,
            relays,
            ballGames,
            discus
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/variables.scss";

.event-card {
    background-color: #F2F2F2;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 10px;
    padding: 10px;
    width: 100%;
    height: 100%;
    transition: 0.2s ease-in-out;
}

.card-header-title {
    color: #1e293b;
}

.event-card:hover {
    background-color: $primary;
    transition: 0.2s ease-in-out;
}

.option-title {
  font-size: 34px;
  margin-bottom: 30px;
  font-weight: bold;
  text-align: center;
}





</style>