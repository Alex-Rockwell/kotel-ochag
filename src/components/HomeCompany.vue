<template>
  <section class="company">
    <div class="container">
      <div class="company__box">
        <div class="left-box">
          <img
            class="company__logo"
            src="../../assets/images/logo-servisgas.svg"
            alt="Сервисгаз группа компаний"
          />
        </div>
        <div class="right-box">
          <div class="company__info">
            <h2 class="company__title">О компании СервисГаз</h2>
            <div class="company__descr">
              <p>
                Компания СервисГаз более 20ти лет является разработчиком 
                газового оборудования и систем управления и контроля горения.
              </p>
              <p>
                Более 20ти высококвалифицированных конструкторов и технологов
                составляют научно-техническую команду СервисГаз.
              </p>
              <p>
                В настоящее время зарегистрировано более 15ти объектов
                интеллектуальной собственности. Данные разработки внедрены в
                производство и нашли свое место на рынке.
              </p>
              <p>
                СервисГаз практикует сотрудничество с компаниями, которым
                требуется разработать систему управления и контроля горения или
                спроектировать и производить газовое отопительное оборудование.
              </p>
              <p>
                СервисГаз приглашает к совместной работе технические коллективы
                специализирующихся на опытно-конструкторских разработках газовой
                техники.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="arrow-box">
    <a href="#homePartners">
      <img
        class="arrowDown"
        src="../../assets/images/icon-arrowDown.svg"
        alt="Стрелка вниз"
      />
    </a>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.company {
  padding-top: 0;
  padding-bottom: 30px;
  background-color: #F9F9F9;

  @media (max-width: 720px) {
    margin-top: 160px;
    padding-top: 50px;
  }
  @media (max-width: 720px) {
    margin-top: 120px;
  }
  @media (max-width: 630px) {
    padding-top: 20px;
  }
  @media (max-width: 530px) {
    margin-top: 80px;
  }
  @media (max-width: 500px) {
    margin-top: 0px;
  }
}
.company__box {
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 720px) {
    flex-direction: column;
  }
}
.left-box {
  flex-basis: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.company__logo {
  width: 50%;
  height: auto;

  @media (max-width: 1150px) {
    width: 60%;
  }
  @media (max-width: 1030px) {
    width: 70%;
  }
  @media (max-width: 860px) {
    width: 80%;
  }
  @media (max-width: 720px) {
    width: 100px;
  }
}
.right-box {
  flex-basis: 75%;
  padding-top: 40px;
}
.company__title {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  color: #3c3f47;
  margin-bottom: 20px;

  @media (max-width: 720px) {
    font-size: 28px;
  }
}
.company__descr > * {
  margin-bottom: 10px;

  @media (max-width: 720px) {
    font-size: 12px;
  }
}

.arrow-box {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 993px) {
    display: none;
  }
}
.arrowDown {
  cursor: pointer;
}
</style>
