<template>
  <div>

        <section class="boiler">
        <div class="container">
            <div class="boiler__top">
                <img :src="`../../${element.image}`" alt="Котел Буран" class="boiler__img boiler__img_extralong">
                <div class="boiler__main">
                    <ul class="boiler__path">
                        <li class="boiler__path-item">
                            <RouterLink to="/catalog" class="boiler__path-link">Каталог</RouterLink>
                        </li>
                        <li class="boiler__path-item">
                            <span class="boiler__path-divider">/</span>
                            <a href="#" class="boiler__path-link">{{element.typeName}}</a>
                        </li>
                    </ul>
                    <h2 class="boiler__title titleH2">{{element.title}}</h2>
                    <h3 class="boiler__chars-title">Характеристики</h3>
                    <ul class="boiler__chars">
                        <li class="boiler__chars-item">
                            <span>Номинальная мощность</span>
                            <b>{{element.feature1}}</b>
                        </li>
                        <li class="boiler__chars-item">
                            <span>Отапливаемая площадь</span>
                            <b>{{element.feature2}}</b>
                        </li>
                        <li class="boiler__chars-item">
                            <span>Тип установки</span>
                            <b>{{element.feature3}}</b>
                        </li>
                        <li class="boiler__chars-item">
                            <span>Количество контуров</span>
                            <b>{{element.feature4}}</b>
                        </li>
                        <li class="boiler__chars-item">
                            <span>Тип топлива</span>
                            <b>{{element.feature5}}</b>
                        </li>
                        <li class="boiler__chars-item">
                            <span>Материал</span>
                            <b>{{element.feature6}}</b>
                        </li>
                    </ul>
                    <span class="boiler__chars-footnote">*Работа на сжиженном газе возможна при установке соответствующего комплекта</span>
                    <ul class="boiler__documents">
                        <li class="boiler__documents-item">
                            <a v-if="dLink1 != '#'" v-bind:href="dLink1" target="_blank" class="boiler__documents-link">Руководство пользователя</a>
                            <div v-if="dLink1 == '#'" @click="alert()" class="boiler__documents-link not-active">Руководство пользователя</div>
                        </li>
                        <li class="boiler__documents-item">
                            <a v-if="dLink2 != '#'" v-bind:href="dLink2" target="_blank" class="boiler__documents-link">Гарантийный талон</a>
                            <div v-if="dLink2 == '#'" @click="alert()" class="boiler__documents-link not-active">Гарантийный талон</div>
                        </li>
                        <li class="boiler__documents-item">
                            <a v-if="dLink3 != '#'" v-bind:href="dLink3" target="_blank" class="boiler__documents-link">Сертификат</a>
                            <div v-if="dLink3 == '#'" @click="alert()" class="boiler__documents-link not-active">Сертификат</div>
                        </li>
                        <li class="boiler__documents-item">
                            <a v-if="dLink4 != '#'" v-bind:href="dLink4" target="_blank" class="boiler__documents-link">Каталог запчастей</a>
                            <div v-if="dLink4 == '#'" @click="alert()" class="boiler__documents-link not-active">Каталог запчастей</div>
                        </li>
                    </ul>
                </div>
                <ul class="boiler__price">
                    <li class="boiler__price-item">
                        <span class="boiler__price-type">Розничная цена</span>
                        <span class="boiler__price-value">от {{element.price}}</span>
                        <!-- <a href="/page/shops.html" class="boiler__price-link">Где купить?</a> -->
                        <button @click="openModal" class="boiler__price-link">Купить</button>
                    </li>
                    <li class="boiler__price-item">
                        <a href="/page/topartners.html" class="boiler__price-link">Как стать дилером?</a>
                    </li>
                </ul>
            </div>

            <div class="boiler__top boiler__top_1200">
                <img :src="`../../${element.image}`" alt="Котел Буран" class="boiler__img boiler__img_extralong">
                <div class="boiler__main">
                    <ul class="boiler__path">
                        <li class="boiler__path-item">
                            <RouterLink to="/catalog" class="boiler__path-link">Каталог</RouterLink>
                        </li>
                        <li class="boiler__path-item">
                            <span class="boiler__path-divider">/</span>
                            <a href="#" class="boiler__path-link">{{element.typeName}}</a>
                        </li>
                    </ul>
                    <h2 class="boiler__title titleH2">{{element.title}}</h2>
                    <h3 class="boiler__chars-title">Характеристики</h3>
                    <ul class="boiler__chars">
                        <li class="boiler__chars-item">
                            <span>Номинальная мощность</span>
                            <b>{{element.feature1}}</b>
                        </li>
                        <li class="boiler__chars-item">
                            <span>Отапливаемая площадь</span>
                            <b>{{element.feature2}}</b>
                        </li>
                        <li class="boiler__chars-item">
                            <span>Тип установки</span>
                            <b>{{element.feature3}}</b>
                        </li>
                        <li class="boiler__chars-item">
                            <span>Количество контуров</span>
                            <b>{{element.feature4}}</b>
                        </li>
                        <li class="boiler__chars-item">
                            <span>Тип топлива</span>
                            <b>{{element.feature5}}</b>
                        </li>
                        <li class="boiler__chars-item">
                            <span>Материал</span>
                            <b>{{element.feature6}}</b>
                        </li>
                    </ul>
                    <span class="boiler__chars-footnote">*Работа на сжиженном газе возможна при установке соответствующего комплекта</span>
                </div>
                <ul class="boiler__price">
                    <li class="boiler__price-item">
                        <span class="boiler__price-type">Розничная цена</span>
                        <span class="boiler__price-value">от {{element.price}}</span>
                        <a href="/page/shops.html" class="boiler__price-link">Где купить?</a>
                    </li>
                    <li class="boiler__price-item">
                        <a href="/page/topartners.html" class="boiler__price-link">Как стать дилером?</a>
                    </li>
                </ul>
                <ul class="boiler__documents">
                    <li class="boiler__documents-item">
                        <a v-if="dLink1 != '#'" v-bind:href="dLink1" target="_blank" class="boiler__documents-link">Руководство пользователя</a>
                        <div v-if="dLink1 == '#'" @click="alert()" class="boiler__documents-link not-active">Руководство пользователя</div>
                    </li>
                    <li class="boiler__documents-item">
                        <a v-if="dLink2 != '#'" v-bind:href="dLink2" target="_blank" class="boiler__documents-link">Гарантийный талон</a>
                        <div v-if="dLink2 == '#'" @click="alert()" class="boiler__documents-link not-active">Гарантийный талон</div>
                    </li>
                    <li class="boiler__documents-item">
                        <a v-if="dLink3 != '#'" v-bind:href="dLink3" target="_blank" class="boiler__documents-link">Сертификат</a>
                        <div v-if="dLink3 == '#'" @click="alert()" class="boiler__documents-link not-active">Сертификат</div>
                    </li>
                    <li class="boiler__documents-item">
                        <a v-if="dLink4 != '#'" v-bind:href="dLink4" target="_blank" class="boiler__documents-link">Каталог запчастей</a>
                        <div v-if="dLink4 == '#'" @click="alert()" class="boiler__documents-link not-active">Каталог запчастей</div>
                    </li>
                </ul>
            </div>

            <!-- <ModalAlertOptions v-if="isOpen" v-model:show="isOpen" /> -->
            <!-- <ModalAlertOptions v-if="isOpen" v-model:show="isOpen" /> -->
            <ModalBuyProduct  v-if="isOpen" v-model:show="isOpen" />
        </div>


<!-- ////////////////////////////////////////////////////////////////////////////////////////// -->
            <div class="boiler__body">
                <div class="container">
                    <div class="boiler__body-wrapper">
                        <div class="boiler__description-wrapper">
                            <h4 class="boiler__description-title">Описание</h4>
                            <div class="boiler__description">
                                <p>Аппараты комбинированные газовые водогрейные SERVISGAZ модели BURAN АКГВ изготовлены в России компанией «СервисГаз» г.Ульяновск, с учетом разработок ведущих инженеров, известных своими достижениями в производстве отопительной техники. Использование европейских комплектующих (газовая автоматика SIT-Италия, котрольно-измерительные приборы CEWAL-Италия) и надежной российской стали толщиной 3 мм от ведущих металлургических комбинатов оборонной промышленности, позволили создать сверхнадежный аппарат. Модельный ряд АКГВ включат в себя ЭНЕРГОНЕЗАВИСИМЫЕ Аппараты мощностью от 11,6 до 29 кВт. Теплообменник аппаратов представляет собой жаротрубную конструкцию с винтовыми турбулизаторам. Толщина стали теплообменника – 3 мм, рабочее давление в системе отопления до 3 бар (атм). Теплообменник ГВС - медный змеевидный. Аппараты не нуждаются в подключении к электросети и подходят для систем как с естественной (гравитационной), так и принудительной циркуляцией.</p>
                            </div>
                        </div>
                        <div class="boiler__moreChars-wrapper">
                            <h4 class="boiler__moreChars-title">Подробные характеристики</h4>
                            <ul class="boiler__moreChars">
                                <li class="boiler__moreChars-item">
                                    <span>Бренд</span>
                                    <b>{{element.specification1}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Производитель</span>
                                    <b>{{element.specification2}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Тип установки</span>
                                    <b>{{element.specification3}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Количество контуров</span>
                                    <b>{{element.specification4}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Материал основного теплообменника</span>
                                    <b>{{element.specification5}}</b>
                                </li>
                                <!-- <li class="boiler__moreChars-item">
                                    <span>Материал теплообменника ГВС</span>
                                    <b>{{element.specification1}}</b>
                                </li> -->
                                <li class="boiler__moreChars-item">
                                    <span>Тепловая мощность газогорелочного устройства, кВт</span>
                                    <b>{{element.specification61}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Номинальная теплопроизводительность кВт</span>
                                    <b>{{element.specification6}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Отапливаемая площадь</span>
                                    <b>{{element.specification7}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>КПД, не менее,%</span>
                                    <b>{{element.specification8}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Автоматика</span>
                                    <b>{{element.specification9}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Тип топлива</span>
                                    <b>{{element.specification10}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Перевод на сжиженный газ</span>
                                    <b>{{element.specification11}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Входное давление газа (ном/мин/макс), Па</span>
                                    <b>{{element.specification12}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Максимальный расход природного газа в режиме отопления, куб.м/ч</span>
                                    <b>{{element.specification13}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Разряжение в дымоходе, Па</span>
                                    <b>{{element.specification14}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Макс. Рабочее давление в системе отопления, Мпа (Бар) </span>
                                    <b>{{element.specification15}}</b>
                                </li>
                                <!-- <li class="boiler__moreChars-item">
                                    <span>Макс. Рабочее давление в системе ГВС, Мпа (Бар) </span>
                                    <b>0,6 (6)</b>
                                </li> -->
                                <li class="boiler__moreChars-item">
                                    <span>Максимальная температура теплоносителя, град.С</span>
                                    <b>{{element.specification16}}</b>
                                </li>
                                <!-- <li class="boiler__moreChars-item">
                                    <span>Расход ГВС при ∆t 25⁰C, л/мин</span>
                                    <b>7,0</b>
                                </li> -->
                                <li class="boiler__moreChars-item">
                                    <span>Присоединительная резьба газопровода</span>
                                    <b>{{element.specification17}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Присоединительная резьба патрубков отопления</span>
                                    <b>{{element.specification18}}</b>
                                </li>
                                <!-- <li class="boiler__moreChars-item">
                                    <span>Присоединительная резьба патрубков ГВС</span>
                                    <b>G 1/2"</b>
                                </li> -->
                                <li class="boiler__moreChars-item">
                                    <span>Диаметр подсоединяемого дымохода, мм</span>
                                    <b>{{element.specification19}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Ширина, мм</span>
                                    <b>{{element.specification20}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Высота, мм</span>
                                    <b>{{element.specification21}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Глубина, мм</span>
                                    <b>{{element.specification22}}</b>
                                </li>
                                <li class="boiler__moreChars-item">
                                    <span>Масса, кг</span>
                                    <b>{{element.specification23}}</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import { useRoute } from 'vue-router'
import { RouterLink } from "vue-router";
import prodData from "../../assets/prodData";
import ModalBuyProduct from "../components/ModalBuyProduct.vue";

const products = ref([]);
const elements = ref([]);

const route = useRoute()
const element = ref({})
const routeId = route.params.id

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};

const getElement = () => {
      products.value = prodData;
      elements.value = prodData;
      element.value = elements.value.filter(el => el.id == routeId)[0]
};

onMounted(() => {
    getElement();
    getDLinks();
});

const dLink1 = ref('')
const dLink2 = ref('')
const dLink3 = ref('')
const dLink4 = ref('')

const getDLinks = () => {
    let path = '../../assets/files/'
    dLink1.value = element.value.downloadLink1 ? path + element.value.downloadLink1 : '#'
    dLink2.value = element.value.downloadLink2 ? path + element.value.downloadLink2 : '#'
    dLink3.value = element.value.downloadLink3 ? path + element.value.downloadLink3 : '#'
    dLink4.value = element.value.downloadLink4 ? path + element.value.downloadLink4 : '#'
};

const alert = () => {
    window.alert('Файл не найден')
}


</script>


<style lang="sass" scoped>
.header
    &__item
        &:nth-child(2)
            background-color: blue
            .header__link
                color: #ffffff

.boiler
    padding-top: 20px
    &__top
        display: grid
        grid-template-columns: 404px 680px 285px
        padding-left: 77px
        padding-bottom: 63px
        &_1200
            display: none
    &__img
        margin-top: 66px
        max-width: 404px
        max-height: 393px
        height: 100%
        object-fit: cover
        &_long
            max-width: 269px
        &_extralong
            max-width: 240px
        &_ksgz
            max-width: 370px
    &__main
        margin-left: 96px
    &__path
        display: flex
        list-style: none
        &-link,
        &-divider
            display: inline-block
            font-size: 13px
            line-height: 16px
            color: rgb(0, 123, 197)
            text-decoration: none
            &:hover
                color: rgb(0, 123, 197)
                text-decoration: underline
        &-link
                @media (min-width: 991px)
                    &:hover
                        text-decoration: underline
                    &:active
                        opacity: 0.5
        &-divider
            margin-left: 5px
            margin-right: 5px
    &__title
        margin-top: 10px
    &__chars
        margin-top: 35px
        list-style: none
        &-title
            margin-top: 36px
            font-size: 18px
            line-height: 24px
            font-weight: bold
        &-item
            &:not(:first-child)
                margin-top: 10px
            span
                display: inline-block
                max-width: 200px
                width: 100%
            b
                display: inline-block
                max-width: 300px
                margin-left: 90px
                font-weight: bold
        &-footnote
            display: inline-block
            margin-top: 22px
            font-size: 12px
            line-height: 20px
    &__documents
        display: grid
        grid-template-columns: repeat(4, 155px)
        column-gap: 16px
        margin-top: 25px
        list-style: none
        &-item
            position: relative
            &::before
                content: ''
                display: block
                position: absolute
                top: 52%
                left: 10px
                width: 30px
                height: 47px  
                transform: translateY(-50%)
                background: url('../../assets/images/boiler-download.svg') center no-repeat
        &-link
            display: flex
            align-items: center
            padding: 0 10px 0 52px
            max-width: 156px
            width: 100%
            height: 50px
            background-color: #C2E8FF
            font-size: 11px
            line-height: 13px
            font-weight: bold
            @media (min-width: 992px) 
                &:hover
                    background-color: #8DD3FE
                &:active
                    opacity: 0.5
    &__price
        display: block
        margin-top: 108px
        margin-left: 140px
        list-style: none
        &-item
            min-width: 264px
            &:not(:first-child)
                margin-top: 0px
        &-type
            font-size: 18px
            line-height: 24px
            font-weight: bold
        &-value
            display: inline-block
            margin-top: 5px
            font-size: 36px
            line-height: 44px
        &-link
            display: inline-block
            margin-top: 15px
            padding: 15px 40px 15px 50px
            width: 264px
            height: 50px
            text-align: center
            color: #ffffff
            font-weight: bold
            font-size: 16px
            line-height: 20px
            background-color: #007bc5
            &:hover
                background-color: #19a0f3
                color: #ffffff
            &:active
                opacity: 0.7
    &__body
        padding-top: 30px
        padding-bottom: 85px
        background-color: #eff7fc
        &-wrapper
            display: grid
            grid-template-columns: 765px 850px
            column-gap: 73px
    &__description
        margin-top: 25px
        p
            font-size: 16px
            line-height: 32px
            text-indent: 25px
        p + p
            margin-top: 10px
        &-title
            font-size: 18px
            line-height: 24px
            font-weight: bold
    &__moreChars
        margin-top: 25px
        list-style: none
        &-title
            font-size: 18px
            line-height: 24px
            font-weight: bold
        &-item
            display: grid
            grid-template-columns: repeat(2, 400px)
            &:not(:first-child)
                margin-top: 25px
            span
                display: inline-block
                max-width: 400px
            b
                display: inline-block
                margin-left: 30px
                max-width: 400px
                font-weight: bold

.not-active
    cursor: pointer
    user-select: none

button.boiler__price-link
    border: none
    outline: none
    cursor: pointer

@media (max-width: 1919px)
    .boiler
        &__top
            grid-template-columns: 350px 680px 285px
            padding-left: 0
        &__img
            max-width: 350px
            max-height: 340px
            &_long
                max-width: 235px
            &_extralong
                margin-left: auto
                margin-right: auto
                max-width: 205px
            &_ksgz
                max-width: 320px
        &__body
            &-wrapper
                grid-template-columns: 515px 850px

    // .footer
    //     &__list
    //         margin-left: 0
    //     &__item
    //         &:not(:first-child)
    //             margin-left: 60px

@media (max-width: 1599px)
    .boiler
        &__main
            margin-left: 50px
        &__price
            margin-left: 77px
        &__moreChars
            &-item
                grid-template-columns: repeat(2, 350px)
        &__body
            &-wrapper
                grid-template-columns: 575px 740px

    // .footer
    //     &__item
    //         &:not(:first-child)
    //             margin-left: 50px

@media (max-width: 1439px)
    .boiler
        &__top
            display: none
            &_1200
                display: grid
                grid-template-columns: 370px 600px
        &__img
            margin-top: 30px
            // &_extralong
                
        &__chars
            &-item
                b
                    margin-left: 65px
        &__price
            margin-top: 40px
            margin-left: 40px
            &-item
                &:not(:first-child) 
                    margin-top: 5px
        &__documents
            grid-template: repeat(2, 50px) / repeat(2, 235px)
            margin-top: 45px
            margin-left: 50px
            gap: 20px
            &-link
                max-width: 235px
        &__price
            margin-left: 50px
        &__body
            padding-bottom: 40px
            &-wrapper
                display: block
        &__description
            margin-top: 10px
        &__moreChars
            display: grid
            grid-template-columns: repeat(2, 550px)
            justify-content: space-between
            margin-top: 15px
            &-wrapper
                margin-top: 20px
            &-item
                margin-top: 15px
                grid-template-columns: repeat(2, 275px)
                &:not(:first-child)
                    margin-top: 15px

    // .footer
    //     &__item
    //         &:not(:first-child)
    //             margin-left: 45px

@media (max-width: 1199px)
    .boiler
        &__top
            &_1200
                grid-template-columns: 290px 600px
        &__img
            max-width: 290px
            max-height: 290px
            &_long
                max-width: 200px
            &_extralong
                max-width: 175px
            &_ksgz
                max-width: 275px
        &__price
            margin-top: 15px
            margin-left: 20px
        &__documents
            margin-top: 20px
        &__moreChars
            grid-template-columns: repeat(2, 445px)
            &-item
                grid-template-columns: repeat(2, 222px)
                margin-top: 10px
                &:not(:first-child)
                    margin-top: 20px
    
    // .footer
    //     &__item
    //         &:not(:first-child)
    //             margin-left: 0px


@media (max-width: 991px)
    .boiler
        &__top
            &_1200
                grid-template-columns: 230px 475px
        &__img
            max-width: 230px
            max-height: 230px
            &_long
                max-width: 160px
            &_extralong
                max-width: 140px
            &_ksgz
                max-width: 220px
        &__main
            margin-left: 20px
        &__chars
            margin-top: 20px
            &-item
                b
                    margin-left: 15px
                    max-width: 225px
            &-title
                margin-top: 15px
        &__price
            margin-left: 0px
            &-item
                min-width: 215px
            &-link
                padding: 15px 0
                width: 215px
        &__documents
            grid-template: repeat(2, 50px)/repeat(2, 200px)
            margin-left: 20px
            &-link
                max-width: 200px
        &__moreChars
            display: block
            &-item
                grid-template-columns: repeat(2, 354px)
                margin-top: 13px
                &:not(:first-child)
                    margin-top: 13px

    // .footer
    //     padding-bottom: 0

@media (max-width: 767px)
    .boiler
        &__top
            padding-bottom: 30px
            &_1200
                grid-template-columns: 250px 267px
        &__img
            order: 1
            margin: 35px auto 0 auto
        &__main
            grid-column: 1 / 3
            order: 3
            margin-top: 15px
            margin-left: 0
        &__price
            display: flex
            grid-column: 1 / 3
            order: 4
            &-item
                &:nth-child(2)
                    margin-top: 75px
        &__documents
            grid-template: repeat(2, 50px) / repeat(1, 200px)
            justify-content: flex-end
            order: 2
        &__moreChars
            &-item
                grid-template-columns: repeat(2, 268px)

@media (max-width: 575px)
    .boiler
        &__top
            &_1200
                grid-template-columns: 1fr
        &__img
            margin-top: 0
            max-width: 250px
            max-height: 250px
            &_long
                max-width: 160px
            &_extralong
                max-width: 150px
            &_ksgz
                max-width: 235px
        &__main
            grid-column: 1 / 2
            order: 2
        &__path
            flex-wrap: wrap
        &__chars
            &-title
                margin-top: 10px
            &-item
                display: grid
                grid-template-columns: repeat(2, 121px)
                span
                    max-width: none
                b
                    max-width: none
        &__price
            grid-column: 1 / 2
            order: 4
            flex-wrap: wrap
            &-item
                width: 100%
                text-align: center
                &:nth-child(2)
                    margin-top: 0px
            &-link
                width: 100%
        &__documents
            grid-column: 1 / 2
            order: 3
            display: block
            margin-left: 0
            &-item
                &:not(:first-child)
                    margin-top: 10px
            &-link
                max-width: none
                font-size: 13px
                line-height: 15px
        &__moreChars
            &-item
                grid-template-columns: repeat(2, 50%)
                span
                    word-break: break-word
                b
                    margin-left: 15px

.titleH2
    font-size: 36px
    margin-top: 30px
.boiler__chars-item
    box-sizing: border-box
    margin: 0
    padding: 0
    font-weight: 400
    font-size: 14px
    line-height: 17px
    color: #3c3f47
.boiler__documents-link
    font-size: 11px
    font-weight: 700
    text-decoration: none
    color: #000
.boiler__moreChars-item
    span
        font-size: 14px
        font-weight: 400
    b
        font-size: 14px
        font-weight: 700

</style>