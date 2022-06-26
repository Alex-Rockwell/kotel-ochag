<template>
  <div>
    <div class="overlay" @click="close">
      <div class="modal" @click.stop>
        <h3 class="modal__title">
          Купить котел
        </h3>
        <form method="#" class="form" ref="formA" @submit.prevent="handleForm">
            <input type="text" placeholder="Ваше имя*" class="modal__input mb-10" name="username" required>
            <input type="text" placeholder="Телефон*" class="modal__input mb-10" name="phone" required>
            <p class="modal__text">
              Заполните данные поля и отправьте заявку. В ближайшее время с вами свяжется наш менеджер и уточнит подробности заказа или проконсультирует по другим интересующим вопросам о товаре, запчастях, услугах.
            </p>
            <button @click="" type="submit" class="modal__submit">Отправить</button>
        </form>

        <div class="modal__close" @click="close">×</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ButtonMain from "./ButtonMain.vue";

const emit = defineEmits(["update:show"]);
function close() {
  emit("update:show", false);
}

const formA = ref()

const message = {
  success: 'Спасибо! Скоро мы с вами свяжемся',
  failure: 'Что-то пошло не так...'
};

function handleForm(submitEvent) {

    const formElement = submitEvent.target
    const formData = new FormData(formElement);

    console.log(formData)

    fetch('../../phpmailer/send.php', {
        method: 'POST',
        body: formData
    }).then(data => {
        console.log(data);
        alert(message.success);
    }).catch(() => {
        alert(message.failure);
    }).finally(() => {
        formElement.reset();
    });
}

</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1400px;
  height: 600px;
  padding: 30px;
  border: 1px solid #ccc;
  background-color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  animation-name: a1;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-direction: normal;
}
@keyframes a1 {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.modal__title {
  font-weight: 700;
  font-size: 28px;
  line-height: 20px;
  text-align: center;
  color: #2E2E2E;
  padding-bottom: 40px;
  padding-top: 30px;
}

.modal__text {
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 40px;
}
  
.modal__input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #9F9F9F;
  margin-bottom: 40px;
}

.modal__input:focus {
  border: none;
  outline: none;
  border-bottom: 1px solid #000;
}

.modal__input::placeholder {
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 14px;
  line-height: 20px;
  color: #2E2E2E;
}

.modal__input:focus::placeholder {
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 14px;
  line-height: 20px;
  color: #2E2E2E;
}

.modal__submit {
  display: block;
  margin: auto;
  margin-top: 15px;
  padding: 15px 40px 15px 50px;
  width: 264px;
  height: 50px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  background-color: #007bc5;
  border: none;
  outline: none;

  &:hover {
    background-color: #19a0f3;
    color: #ffffff;
    cursor: pointer;
  }
  &:active {
    opacity: 0.7;
  }
}

.modal__submit:hover {
  cursor: pointer;
}
.btn {
  // left: 50%;
  // transform: translate(-50%, 0);
  // text-align: center;
  display: block;
  margin: auto
}
.form {
  width: 80%;
  display: block;
  margin: 30px auto 0;
}

.modal__close {
  position: absolute;
  top: 20px;
  right: 15px;
  font-size: 50px;
  color: #007bc5;

  &:hover {
    cursor: pointer;
  }
}

</style>