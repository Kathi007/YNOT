<template>
  <section class="container">
    <div
      v-if="current"
      class="fixed fixed--center"
      style="z-index: 3"
      :class="{ transition: isVisible }"
    >
      <Vue2InteractDraggable
        v-if="isVisible"
        :interact-out-of-sight-x-coordinate="500"
        :interact-max-rotation="15"
        :interact-x-threshold="200"
        :interact-y-threshold="200"
        :interact-event-bus-events="interactEventBus"
        interact-block-drag-down
        @draggedRight="emitAndNext('match')"
        @draggedLeft="emitAndNext('reject')"
        @draggedUp="emitAndNext('skip')"
        class="rounded-borders card card--one"
      >
        <div style="height: 100%">
          <div class="text">
            <v-card-title primary-title>
              {{ current.p_name }}
            </v-card-title>
            <v-card-title class="subtitle-1">
              Coding languages required:
            </v-card-title>
            <v-card-text class="grey--text">
              {{ current.pl_name }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-title class="subtitle-1">
              Short description:
            </v-card-title>
            <v-card-text>
              {{ current.p_short_description }}
            </v-card-text>

            <v-card-actions>
              <v-btn
                absolute
                bottom
                :style="{ left: '50%', transform: 'translateX(-50%)' }"
                color="purple"
                outlined
                width="75%"
                :to="`/detailproject/${current.p_projectid}`"
                >KNOW MORE</v-btn
              >
            </v-card-actions>
          </div>
        </div>
      </Vue2InteractDraggable>
    </div>
    <div
      v-if="next"
      class="rounded-borders card card--two fixed fixed--center"
      style="z-index: 2"
    >
      <div style="height: 100%">
        <!-- <img :src="current.image" class="rounded-borders" /> -->

        <div class="text">
          <v-card-title primary-title>
            {{ next.p_name }}
          </v-card-title>
                    <div class="py-12"></div>

          <v-card-title class="subtitle-1">
            Coding languages required:
          </v-card-title>
          <v-card-text class="grey--text">
            {{ next.pl_name }}
          </v-card-text>
          <v-divider></v-divider>
          <v-card-title class="subtitle-1">
            Short description:
          </v-card-title>
          <v-card-text>
            {{ next.p_short_description }}
          </v-card-text>

          <v-card-actions>
            <v-btn
              absolute
              bottom
              :style="{ left: '50%', transform: 'translateX(-50%)' }"
              color="purple"
              outlined
              width="75%"
              :to="`/detailprojects/${next.p_projectid}`"
              >KNOW MORE</v-btn
            >
          </v-card-actions>
        </div>
      </div>
    </div>

    <div class="footer fixed">
      <v-btn class="mr-10" icon color="purple" @click="reject"
        ><v-icon>mdi-heart-off</v-icon></v-btn
      >
      <v-btn class="mr-10" icon color="purple" @click="skip"
        ><v-icon>mdi-debug-step-over</v-icon></v-btn
      >
      <v-btn icon color="purple" @click="match"
        ><v-icon>mdi-heart</v-icon></v-btn
      >
    </div>
  </section>
</template>
<script>
import { Vue2InteractDraggable, InteractEventBus } from 'vue2-interact';
const EVENTS = {
  MATCH: 'match',
  SKIP: 'skip',
  REJECT: 'reject',
};

export default {
  name: 'Swipeabletestingcards',
  components: { Vue2InteractDraggable },
  data() {
    return {
      isVisible: true,
      index: 0,
      interactEventBus: {
        draggedRight: EVENTS.MATCH,
        draggedLeft: EVENTS.REJECT,
        draggedUp: EVENTS.SKIP,
      },
    };
  },
  computed: {
    current() {
      return this.testingcards[this.index];
    },
    next() {
      return this.testingcards[this.index + 1];
    },
  },
  methods: {
    match() {
      InteractEventBus.$emit(EVENTS.MATCH);
      console.log('match');
    },
    reject() {
      InteractEventBus.$emit(EVENTS.REJECT);
      console.log('rejected');
    },
    skip() {
      InteractEventBus.$emit(EVENTS.SKIP);
      console.log('skip');
    },
    emitAndNext(event) {
      this.$emit(event, this.index);
      setTimeout(() => (this.isVisible = false), 200);
      setTimeout(() => {
        this.index++;
        this.isVisible = true;
      }, 200);
    },
  },
  props: {
    testingcards: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  padding-bottom: 50px;
  justify-content: center;
  align-items: center;
}

.flex {
  display: flex;
  &--center {
    align-items: center;
    justify-content: center;
  }
}

.fixed {
  position: fixed;
  &--center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.rounded-borders {
  border-radius: 12px;
}
.card {
  width: 300px;
  height: 55vh;
  background-color: white;
  &--one {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14),
      0 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
  &--two {
    transform: translate(-48%, -48%);
    box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.2),
      0 10px 14px 1px rgba(0, 0, 0, 0.14), 0 4px 18px 3px rgba(0, 0, 0, 0.12);
  }
  &--three {
    background: rgba(rgb(32, 32, 32), 0.8);
    transform: translate(-46%, -46%);
    box-shadow: 0 10px 13px -6px rgba(79, 77, 77, 0.2),
      0 20px 31px 3px rgba(152, 50, 50, 0.14),
      0 8px 38px 7px rgba(0, 0, 0, 0.12);
  }
}

.transition {
  animation: appear 200ms ease-in;
}

@keyframes appear {
  from {
    transform: translate(-48%, -48%);
  }
  to {
    transform: translate(-50%, -50%);
  }
}
</style>
