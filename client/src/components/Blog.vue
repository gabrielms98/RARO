<template>
  <div class="blog">
    <div class="blog__header">
      Blog
    </div>
    <div class="blog__container">
      <div class="blog__container__card" v-for="post in posts" :key="post.id">
        <div class="blog__container__card__image">
          <img src="https://picsum.photos/650">
        </div>
        <div class="blog__container__card__title">
          {{post.title}}
        </div>
        <div class="blog__container__card__text">
          {{post.body}}
        </div>
        <div class="blog__container__card__action">
          <button class="blog__container__card__action__button">
            Continuar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const posts = ref([])

    fetch('https://jsonplaceholder.typicode.com/posts').then(async response => {
      const data = await response.json();

      posts.value = data.slice(0, 10);
    })

    return {
      posts
    }
  }
}
</script>

<style lang="scss">
  @import "../scss/styles";

  .blog {
    // padding: 1rem 8rem;

    &__header {
      color: $white;
      font-size: 3rem;
      background: $dark-blue;
      min-width: 30rem;
      width: 40vw;
      margin-left: -10rem;
      display: flex;
      justify-content: end;
      padding: 0 2rem;
    }

    &__container {
      padding: 3rem 10rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      // max-width: 100vw;

      &__card {
        min-height: 30rem;
        min-width: 22rem;
        width: 22rem;
        border: 2px solid $dark-blue;
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;

        &__image {
          height: 12rem;

          & img {
            width: 100%;
            height: 100%;
          }
        }

        &__title, &__text {
          padding: 1rem 2rem;
          color: $dark-blue;
        }

        &__title {
          font-weight: 600;
        }

        &__text {
          font-weight: 300;
          max-height: 15rem;
          margin-bottom: 1rem;
          text-overflow: ellipsis;
        }

        &__action {
          margin-top: auto;
          background: $dark-blue;
          padding: 2rem 3rem;

          display: flex;
          justify-content: center;
          align-items: center;

          &__button {
            all: unset;
            color: $white;
            padding: .25rem 1rem;
            background: $orange;
            border-radius: 2rem;
          }
        }
      }
    }
  }
</style>