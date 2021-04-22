<template>
  <div>
    <v-app>
    <v-container>
      <h1 class="text-center">Chatroom</h1>
      <div>
        <v-card class="mb-12" height="500px" elevation="2">
          <v-card-text>
            <v-list v-for="(m, i) in history" :key="i">
              <v-list-item>
                <v-chip v-if="currentUsername != m.username">
                  {{ m.username }}: {{ m.text }}
                </v-chip>
                <v-spacer></v-spacer>
                <v-chip
                  color="blue"
                  text-color="white"
                  v-if="currentUsername == m.username"
                >
                  {{ m.username }}: {{ m.text }}
                </v-chip>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
        <p v-if="usernameEntered == false">{{ usernameText }}</p>
        <v-row>
          <v-col cols="6"
            ><p class="ma-0 pa-0">Your nickname:</p>
            <v-chip v-if="usernameEntered == true"> {{ username }} </v-chip>
            <v-text-field
              class="ma-0 pa-0"
              v-if="usernameEntered == false"
              dense
              outlined
              v-model="username"
              @keyup.enter="registeredUsername"
            ></v-text-field
          ></v-col>
          <v-col cols="12" v-if="usernameEntered == true"
            ><p class="ma-0 pa-0">Enter message below:</p>
            <v-text-field
              class="ma-0 pa-0"
              v-model="message"
              @keyup.enter="sendMessage"
              dense
              outlined
            ></v-text-field
            ><v-btn @click="sendMessage" class="ma-0 pa-0">Send</v-btn></v-col
          >
        </v-row>
      </div>
    </v-container>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ws: null,
      message: null,
      history: [],
      username: null,
      currentUsername: null,
      usernameEntered: false,
      usernameText: "ENTER to register Username",
    };
  },
  methods: {
    sendPm() {
      let command = ''
      let splitMessage = this.message.split('')
      console.log(splitMessage)
      if(splitMessage[0] == "/"){
        console.log("command registered")
        if(command.concat(splitMessage[1], splitMessage[2]) === 'pm'){
          console.log("Private Message Registered")
          
        }
        else{
          console.log("please type in a valid command!")
        }
      }
    },
    sendMessage() {
      this.sendPm()
      this.ws.send(
        JSON.stringify({ username: this.username, text: this.message })
      );
    },
    registeredUsername() {
      if (this.username == null)
        this.usernameText = "Please enter a valid username";
      else this.usernameEntered = true;
      this.currentUsername = this.username;
    },
  },
  created() {
    this.ws = new WebSocket("ws://localhost:3001");

    this.ws.onopen = () => {
      console.log("Connection opened");
    };

    this.ws.onclose = () => {
      console.log("Connection closed");
    };

    this.ws.onmessage = (event) => {
      console.log(event.data);
      this.history.push(JSON.parse(event.data));
    };
  },
};
</script>

<style scoped>
.v-card {
  display: flex !important;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1;
  overflow: auto;
}
</style>
