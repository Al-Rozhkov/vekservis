<template>
  <div>
    <page-header class="ph-purple">
      <header-submenu :menu="services" />
      <h1 class="page-title">
        Аутсорсинг персонала
      </h1>
    </page-header>

    <section class="section">
      <div class="d-grid grid">
        <div>
          <h4>Сохраняем Ваше время</h4>
          <p>Подбираем необходимый персонал в сжатые сроки</p>
          <p>Отвечаем за адаптацию и программу мотивации персонала</p>
          <p>Гарантируем соблюдение графиков выхода персонала</p>
        </div>
        <div>
          <h4>Обеспечиваем безопасность</h4>
          <p>
            Сопровождаем проект специалистом по охране труда, оформляем
            медицинские книжки и необходимые допуски
          </p>
          <p>
            Персональный менеджер обеспечивает организацию вывода персонала на
            работу и курирует их эффективность
          </p>
        </div>
        <div>
          <h4>Экономим Ваши финансовые ресурсы</h4>
          <p>Ведем кадровое сопровождение в полном объеме</p>
          <p>Ведем всю необходимую налоговую отчетность</p>
          <p>Берем все затраты на себя по найму (реклама, подбор, обучение)</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Персонал под любой запрос</h2>
      <ul>
        <li>Административный персонал</li>
        <li>Строительство и архитектура</li>
        <li>Бухгалтерия и финансы</li>
        <li>Продажи и закупки</li>
        <li>Розничная торговля</li>
        <li>Другие сферы</li>
      </ul>
    </section>

    <section class="section">
      <h2>Порядок работы с нами</h2>
      <div class="d-grid grid">
        <div>
          <span class="b">1</span>
          <h3>Заявка от Вас</h3>
        </div>
        <div>
          <span class="b">2</span>
          <h3>Мониторинг</h3>
          <p>Изучаем специфику Вашего бизнеса, проводим аудит на объекте для четкого понимания особенностей всех работ</p>
        </div>
        <div>
          <span class="b">3</span>
          <h3>Формируем коммерческое предложение</h3>
        </div>
        <div>
          <span class="b">4</span>
          <h3>Заключаем договор</h3>
        </div>
        <div>
          <span class="b">5</span>
          <h3>Начинаем работать</h3>
          <p>Предоставляем Вам персонал согласно заявке</p>
        </div>
        <div>
          <span class="b">6</span>
          <h3>Реализация проекта</h3>
          <p>Администрируем проект персональным менеджером</p>
        </div>
        <div>
          <span class="b">7</span>
          <h3>Качественная обратная связь</h3>
          <p>Вы получили желаемый результат</p>
        </div>
      </div>
    </section>

    <feedback-form />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import HeaderSubmenu from '~/components/HeaderSubmenu.vue'
import FeedbackForm from '~/components/FeedbackForm.vue'

import servicesData from '~/data/services.json'

export default {
  components: {
    PageHeader,
    HeaderSubmenu,
    FeedbackForm
  },
  data () {
    return {
      services: servicesData
    }
  },
  head: {
    title: 'Аутсорсинг персонала',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Компания ВЭКСЕРВИС обеспечивает Ваш бизнес персоналом, взяв на себя ответственность за весь процесс от подбора до полного сопровождения и управления персоналом.'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/init.scss';

.b {
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  background: $yellow;
  border-radius: 50%;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}
</style>
