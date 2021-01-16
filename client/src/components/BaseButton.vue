<template>
  <button class="button" :class="{ animate: clicked }" @click="click">
    <span class="button__label"> {{ label }} </span>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      clicked: false,
    };
  },

  methods: {
    click() {
      this.clicked = true;
      this.$emit('click');

      setTimeout(() => {
        this.clicked = false;
      }, 600);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';

.button {
  border-radius: 8px;
  display: inline-block;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  outline: none;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  height: 40px;

  &:hover {
    background-color: #d973b5;

    .button__label {
      color: $c-white;
    }
  }

  &:global(.animate) {
    pointer-events: none;
    animation: scaleUpAndDown 0.6s;
    animation-timing-function: ease-in-out;
  }

  &__label {
    min-width: 50px;
    font-size: 20px;
    color: #d973b5;
  }
}
</style>
