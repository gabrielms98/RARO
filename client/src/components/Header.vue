<template>
  <div class="header">
    <div class="header__background"></div>
    <div class="header__card">
      <div class="header__card__span">Vida Toda</div>
      <div class="header__card__main">BEM ESTAR</div>
      <div class="header__card__span header__card__span__last">
        Soluções completas para viver mais e melhor
      </div>

      <button class="header__button">
        Quero uma consultoria
      </button>
    </div>

    <div class="header__card header__card__inverse">
      <div class="header__card__title">
        Pronto para planejar seu sossego?
      </div>
      <p class="header__card__p">
        Agende uma consultoria sem compromisso pelo formulario abaixo!
      </p>
      <div class="header__card__input">
        <label class="header__card__input__label" for="">Nome:</label>
        <input class="header__card__input__field" type="text">
      </div>

      <div class="header__card__input">
        <label class="header__card__input__label" for="">E-mail:</label>
        <input class="header__card__input__field" type="text">
      </div>

      <div class="header__card__input">
        <label class="header__card__input__label" for="">Estado Civil:</label>
        <input class="header__card__input__field" type="text">
      </div>

      <div class="header__card__input">
        <label class="header__card__input__label" for="">Profissão:</label>
        <input class="header__card__input__field" type="text">
      </div>

      <div class="header__card__input">
        <label class="header__card__input__label" for="">Telefone/Whatspp:</label>
        <input class="header__card__input__field" type="text">
      </div>

      <div class="header__card__input">
        <label class="header__card__input__label" for="">Renda Mensal:</label>
        <input class="header__card__input__field" type="text">
      </div>

      <button class="header__card__action">
        Enviar
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import "../scss/styles";

  .header {
    width: 100%;
    min-height: 45vh;

    display: flex;
    justify-content: space-around;

    @include breakpoint-down(small) {
      flex-direction: column;
      align-items: center;
    }

    &__background {
      position: absolute;
      width: 100vw;
      height: 60%;
      left: 0;
      right: 0;
      background-image: url("https://picsum.photos/650");
      background-repeat: no-repeat;
      background-size: 100%;
      z-index: 1;

      @include breakpoint-down(small) {
        top: 0;
      }
    }

    &__card {
      z-index: 5;
      width: 22rem;
      min-height: 70%;

      margin-top: 2rem;
      padding: 1.5rem 1rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      border: 2px solid $dark-blue;

      @include breakpoint-down(small) {
        height: 28rem;
        margin-top: 8rem;
      }
      

      &__inverse {
        border: none;
        background: $dark-blue;
        transform: translateY(25%);

        @include breakpoint-down(small) {
          transform: translateY(0);
          height: 38rem;
          margin-top: 1rem;
        }
      }

      &__main {
        font-size: 5rem;
        color: $dark-blue;
        line-height: .9;
        font-weight: 900;
      }

      &__span {
        align-self: flex-start;
        font-size: 1.25rem;
        color: $dark-blue;

        &__last {
          margin: auto 0;
        }
      }

      &__title {
        color: $orange;
        font-size: 1.5rem;
        font-weight: 400;
      }

      &__p {
        margin: 2rem 0;
        color: $white;
        font-size: 1rem;
        font-weight: 300;
      }

      &__input {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        width: 100%;

        &__label {
          color: $white;
        }

        &__field {
          all: unset;
          width: 100%;
          background: $light-blue;
        }
      }

      &__action {
        all: unset;
        color: $white;
        padding: .25rem 1rem;
        background: $orange;
        border-radius: 2rem;
        margin-top: 2rem;
      }
    }

    &__button {
      all: unset;
      background: $orange;
      padding: 1rem 2rem;
      color: white;
    }
  }
</style>