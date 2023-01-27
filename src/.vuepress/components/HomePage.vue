<template>
  <section class="home-page">
    <header class="home-page__header">
      <h1 class="home-page__main-title">{{ mainTitle }}</h1>
    </header>
    <p class="home-page__summary-message">{{ summaryMessage }}</p>
    <!-- <a :href="$withBase('/frontend')" class="home-page__explore">Explore Front-End🗺️</a> -->
    <div class="home-page__search-box"><SearchBox/></div>
    <br>
    <br>
    <img class="home-page__logo" src="https://cdn.dribbble.com/users/88966/screenshots/1062196/environment.png"/>
    <br>
    <div class="home-page__datetime">
      <div class="home-page__datetime__time">{{ time }}</div>
      <div class="home-page__datetime__date">{{ date }}</div>
    </div>
    <br>
    <br>
    <div class="home-page__authors">Author: <a target="_blanc" href="https://artemshar.space">Artem Shar</a></div>
  </section>
</template>

<script>
  const { description, name } = require('../../../package');
  
  import SearchBox from '@SearchBox'
  
  export default {
    data() {
      return {
        mainTitle: name,
        summaryMessage: description,
        date: '',
        time: ''
      }
    },
    created() {
      setInterval(this.getCurrentTime, 1000);
    },
    components: { SearchBox },
    methods: {
      getCurrentTime:  function() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const today = new Date();
        const date = today.getDate() + ' ' + ( months[today.getMonth()] ) + ' ' + today.getFullYear();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        this.date = date;
        this.time = time;
      }
    }
  }
</script>
