<template> 
<v-container>
  <v-row>

    <v-col cols="2">
        <v-btn @click="deleteAll" color="success">RESET</v-btn>
    </v-col>
    <v-col class="d-flex justify-center mt-10" cols="8">

      <v-card class="btn-hover color-1">
<h1 class="mx-7">VISITOR COUNTER</h1>
</v-card>
</v-col>



<v-col cols="12" class="d-flex justify-center">
       <div v-for="item in fetchbisitor" :key="item.GateNum">
           <!--  <h1>{{ item.GateNum }}</h1> -->
            <h1 class="Nubercounter">{{ item.VisitorCount }}</h1>
          </div>
       
     
</v-col>
</v-row>

</v-container>
<v-container>
     
       
       
       
    </v-container>
</template>


<script>

import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
     /*  fetchbisitor:[], */
      
    };
  },

  computed: {
    ...mapGetters('visitor', {fetchbisitor: ['getVisitors']} ),


 },

 created() {

  this.refreshInterval = setInterval(() => {
      this.fetchVisitors();
    }, 500);


 },

 
  methods: {
    ...mapActions('visitor', ['fetchVisitors']),

    async deleteAll() {
      try {
        await fetch('http://localhost/visitorcounter/deleteall.php', {
          method: 'DELETE',
        });

      } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred while deleting records.');
      }
    },


  },
};
</script>



 <style>

 
.btn-hover.color-1 {
  background-image: linear-gradient(to right, #0b5879, #1b583b, #0e6d3f, #078045);
/* background-image: linear-gradient(to right, #ffffff 60%, #cccccc 30%, #000000 10%); */
font-family: "Fantasy";
  font-size:30px;
color:white;

  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644);
}


  .visitorcounter{
 

  font-family: "Fantasy";
  font-size:100px;
  background-color: rgba(24, 80, 24, 0.947);
  color:white;
  }


  .Nubercounter {
 

 font-family: "Copperplate";
 font-size:250px;
 }


</style>