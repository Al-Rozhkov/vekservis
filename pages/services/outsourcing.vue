<template>
  <div>
    <page-header class="ph-blue">
      <header-submenu :menu="services" />
      <h1 class="page-title">
        Аутсорсинг персонала
      </h1>
    </page-header>

    <section class="section">
      <h2 class="page-subtitle">
        <span class="page-subtitle-underline">Мы обеспечиваем Ваш бизнес персоналом, взяв на себя ответственность
          за весь процесс от подбора до полного сопровождения и управления
          персоналом</span>
      </h2>

      <h2 class="text-center">
        Преимущества работы с&nbsp;нами
      </h2>

      <div class="d-grid grid">
        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/timetable.png">
          <h4>Сохраняем Ваше время</h4>
          <p>
            Подбираем необходимый персонал в сжатые сроки (у нас есть своя база
            данных соискателей).
          </p>
          <p>Отвечаем за адаптацию и программу мотивации персонала.</p>
          <p>Гарантируем соблюдение графиков выхода персонала.</p>
          <p>
            Контролируем выполнение нанятыми людьми должностных обязанностей.
          </p>
          <p>
            Находим исполнителей с соответствующим уровнем образования и нужными
            Вам профессиональными навыками.
          </p>
          <p>
            Трудовые споры и взаимодействие с трудовой инспекцией исключаются -
            всю нагрузку по оформлению мы берём на себя.
          </p>
          <p>
            Мы позволим снизить документальную нагрузку на кадровиков и
            бухгалтерию.
          </p>
        </div>

        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/safety.png">
          <h4>Обеспечиваем безопасность</h4>
          <p>
            Сопровождаем проект специалистом по охране труда, оформляем
            медицинские книжки и необходимые допуски.
          </p>
          <p>
            Персональный менеджер обеспечивает организацию вывода персонала на
            работу и курирует их эффективность.
          </p>
          <p>
            Проверяем достоверность предоставленных документов об образовании.
          </p>
          <p>
            Выясняем опыт работы, изучаем рекомендации и проверяем их
            подлинность.
          </p>
          <p>
            Выясняем мотивацию к выполнению работы, тип характера,
            стрессоустойчивость.
          </p>
          <p>Проверяем персонал службой безопасности.</p>
        </div>

        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/safe.png">
          <h4>Экономим Ваши финансовые ресурсы</h4>
          <p>Ведем кадровое сопровождение в полном объеме.</p>
          <p>Ведем всю необходимую налоговую отчетность.</p>
          <p>Берем все затраты на себя по найму (реклама, подбор, обучение).</p>
          <p>
            Вы будете экономить на социальных, налоговых выплатах и фонде
            заработной платы.
          </p>
          <p>
            За счет увеличения расходной части отчетности можете снизить
            налогооблагаемую базу.
          </p>
          <p>Можете экономить административный ресурс.</p>
          <p>
            Полное комплектование штатом позволит Вашей компании работать
            стабильно, в плановом режиме, а значит максимально эффективно.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="text-center">
        Персонал под любой запрос
      </h2>
      <div class="row">
        <div class="col-6">
          <h3>Линейный и неквалифицированный персонал</h3>
          <!-- <ul>
            <li>
              Розничная торговля (кассиры, продавцы, работники торгового зала)
            </li>
            <li>
              Складской персонал и персонал на производство (комплектовщики;
              водители погрузчиков, штабелеров; разнорабочие, фасовщики,
              упаковщики, стикеровщик, сортировщик, упаковщик)
            </li>
            <li>Линейный персонал (грузчики, разнорабочие, уборщицы)</li>
          </ul> -->
        </div>
        <div class="col-6">
          <h3>Административный и инженерный персонал</h3>
          <!-- <ul>
            <li>Административный персонал</li>
            <li>Строительство и архитектура</li>
            <li>Бухгалтерия и финансы</li>
            <li>Продажи и закупки</li>
          </ul> -->
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="text-center mb-4">
        Для кого
      </h2>

      <div class="d-grid grid-4 mb-4">
        <card-hover icon-name="mall">
          Торговых центров
        </card-hover>
        <card-hover icon-name="warehouse">
          Складов
        </card-hover>
        <card-hover icon-name="factory">
          Производств
        </card-hover>
        <card-hover icon-name="worker">
          Объектов, где требуются рабочие
        </card-hover>
        <card-hover icon-name="brick-wall">
          Строительных организаций
        </card-hover>
        <card-hover icon-name="transport">
          Транспортных компаний
        </card-hover>
        <card-hover icon-name="delivery">
          Курьерских служб
        </card-hover>
        <card-hover icon-name="engineer">
          Прорабов
        </card-hover>
      </div>
    </section>

    <div class="container mb-4">
      <feedback-form-inline />
    </div>

    <section class="section">
      <h2 class="text-center mb-4">
        Порядок работы с нами
      </h2>
      <div class="d-grid grid">
        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/envelope.png">
          <span class="b">1</span>
          <h3>Заявка от Вас</h3>
          <p>
            Заполните любую форму на сайте и наш менеджер свяжется с Вами для
            уточнения деталей по Вашей заявке. Мы обсудим количество
            необходимого персонала, требования к нему, в каком регионе работа и
            чем будет занят персонал.
          </p>
        </div>
        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/headhunting.png">
          <span class="b">2</span>
          <h3>Мониторинг</h3>
          <p>
            Изучаем специфику Вашего бизнеса, производим выезд на объект для
            четкого понимания особенностей всех работ
          </p>
        </div>
        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/contract.png">
          <span class="b">3</span>
          <h3>Заключаем договор</h3>
          <p>
            Начинаем согласование договора и договорной цены. Решаем, как будем
            производить оплату, цена будет ниже при условии оплаты каждые 15
            дней.
          </p>
        </div>
        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/hired.png">
          <span class="b">4</span>
          <h3>Реализация проекта</h3>
          <p>Администрируем проект персональным менеджером</p>
        </div>
        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/staff.png">
          <span class="b">5</span>
          <h3>Начинаем работать</h3>
          <p>
            Необходимый персонал выезжает к Вам на объект. Это занимает от 3-х
            до 21 рабочего дня (от 50 человек). В случае, если какие-либо
            сотрудники не подходят Вам по профилю — производим срочную замену
            сотрудника за 24 часа
          </p>
        </div>
        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/insurance.png">
          <span class="b">6</span>
          <h3>Качественная обратная связь</h3>
          <p>Вы получили желаемый результат</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="text-center mb-4">
        Сила в контроле
      </h2>
      <div class="d-grid grid">
        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/manager.png">
          <h3>Личный менеджер</h3>
          <p>
            За ваш объект отвечает персональный менеджер. Он собирает информацию
            для запуска проекта, составляет расписание сотрудников и
            корректирует работу над проектом. Менеджер всегда в курсе
            происходящего, поэтому ответит на любой ваш вопрос.
          </p>
        </div>

        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/brigadir.png">
          <h3>Бригадир</h3>
          <p>
            За выполнение заданий и работу бригады отвечает бригадир. Он
            руководит рабочими на объекте, ставит им задачи и распределяет по
            местам.
          </p>
          <p>
            На каждом объекте у нас от 1 до 5 бригадиров (в зависимости от
            заявки), которые контролируют процесс, ведут табель учета рабочего
            времени, контролируют выработку и помогают Вам в управлении
            персоналом.
          </p>
        </div>

        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/docs-dep.png">
          <h3>Отдел документооборота</h3>
          <p>
            Отдел документооборота предоставит несколько вариантов договора и
            способов оплаты. Как показывает практика, наши клиенты это ценят.
          </p>
        </div>
      </div>
    </section>

    <div class="container mb-4">
      <feedback-form id="feedback-form-bottom">
        <h2>Остались вопросы?</h2>
        <p class="text-center">
          Задайте их нашему специалисту
        </p>
      </feedback-form>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import HeaderSubmenu from '~/components/HeaderSubmenu.vue'
import FeedbackForm from '~/components/FeedbackForm.vue'
import FeedbackFormInline from '~/components/FeedbackFormInline.vue'
import CardHover from '~/components/CardHover.vue'

import servicesData from '~/data/services.json'

export default {
  components: {
    PageHeader,
    HeaderSubmenu,
    FeedbackForm,
    FeedbackFormInline,
    CardHover
  },
  layout: 'clean',
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

.grid-4 {
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
}

.card-blue {
  background: $dark-blue;
  color: $white;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem 1.5rem 1rem;

  p {
    font-size: 0.8rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }
}

.card-img {
  max-width: 4.25rem;
  height: auto;
  display: block;
  margin: 0 auto;
}

.b {
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.5rem;
  background: $white;
  color: $dark-blue;
  border-radius: 50%;
  margin-top: 1.5rem;
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.page-subtitle {
  max-width: 52rem;
  margin: 1.5rem auto 3.5rem;
  text-align: center;
}

.page-subtitle-underline {
  max-width: 60rem;
  border-bottom: 3px solid rgba($blue, 15%);
}
</style>
