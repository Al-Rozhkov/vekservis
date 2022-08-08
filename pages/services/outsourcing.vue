<template>
  <div>
    <page-header class="ph-purple">
      <header-submenu :menu="services" />
      <h1 class="page-title">
        Аутсорсинг персонала
      </h1>
    </page-header>

    <section class="section">
      <h2 class="text-center">
        На чем же основана бизнес-модель аутсорсинга?
      </h2>

      <p>
        Если у вас в штате работают сотрудники, за которых вы регулярно и в
        полном объеме производите все социальные и налоговые отчисления, то мы
        можем предложить вам решение по снижению финансовой нагрузки на ваш
        бизнес: привлечь самозанятых.
      </p>

      <p>
        Ваш фонд оплаты труда в сумме с расходами на социальные выплаты может
        быть сокращен за счет применения налогового режима самозанятых лиц.
        Дополнительным преимуществом будет возможность повышения уровня
        заработной платы привлекаемым сотрудникам за счет сэкономленных средств,
        что создаст дополнительную заинтересованность в вас как работодателе со
        стороны более квалифицированных кадров.
      </p>

      <p>
        Мы берем на себя все кадровое делопроизводство по работе с самозанятыми
        вместо Вас, в том числе, использование пакета специализированных
        программ по расчету с самозанятыми.
      </p>

      <div class="d-grid grid">
        <div class="card-light">
          <h4>Сохраняем Ваше время</h4>
          <p>
            Подбираем необходимый персонал в сжатые сроки (у нас есть своя база
            данных соискателей)
          </p>
          <p>Отвечаем за адаптацию и программу мотивации персонала</p>
          <p>Гарантируем соблюдение графиков выхода персонала</p>
          <p>
            Контролируем выполнение нанятыми людьми должностных обязанностей.
          </p>
          <p>
            Находим исполнителей с соответствующим уровнем образования и нужными
            Вам профессиональными навыками.
          </p>
          <p>
            Вы не вступаете в трудовые отношения с временным персоналом -
            сводятся на нет возможность трудовых споров
          </p>
          <p>Вы не платите за простой, избегая проблем с трудовой инспекцией</p>
          <p>
            Мы позволим снизить документальную нагрузку на кадровиков и
            бухгалтерию.
          </p>
        </div>

        <div class="card-light">
          <h4>Обеспечиваем безопасность</h4>
          <p>
            Сопровождаем проект специалистом по охране труда, оформляем
            медицинские книжки и необходимые допуски
          </p>
          <p>
            Персональный менеджер обеспечивает организацию вывода персонала на
            работу и курирует их эффективность
          </p>
          <p>
            Проверяем достоверность предоставленных документов об образовании
          </p>
          <p>
            Выясняем опыт работы, изучаем рекомендации и проверяем их
            подлинность
          </p>
          <p>
            Выясняем мотивацию к выполнению работы, тип характера,
            стрессоустойчивость
          </p>
          <p>Проверяем персонал службой безопасности</p>
        </div>

        <div class="card-light">
          <h4>Экономим Ваши финансовые ресурсы</h4>
          <p>Ведем кадровое сопровождение в полном объеме</p>
          <p>Ведем всю необходимую налоговую отчетность</p>
          <p>Берем все затраты на себя по найму (реклама, подбор, обучение)</p>
          <p>
            Вы будете экономить на социальных, налоговых выплатах и фонде
            заработной платы
          </p>
          <p>
            За счет увеличения расходной части отчетности можете снизить
            налогооблагаемую базу
          </p>
          <p>Можете экономить административный ресурс</p>
          <p>
            Ваше предприятие и склад будут работать стабильно, в плановом
            режиме, а значит максимально эффективно
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
          <h3>Линейный и неквалифицированный персонал:</h3>
          <ul>
            <li>Розничная торговля (кассиры, продавцы, работники торгового зала)</li>
            <li>Складской персонал и персонал на производство (комплектовщики; водители погрузчиков, штабелеров; разнорабочие, фасовщики, упаковщики, стикеровщик, сортировщик, упаковщик)</li>
            <li>Линейный персонал (грузчики, разнорабочие, уборщицы)</li>
          </ul>
        </div>
        <div class="col-6">
          <h3>Административный и инженерный персонал:</h3>
          <ul>
            <li>Административный персонал</li>
            <li>Строительство и архитектура</li>
            <li>Бухгалтерия и финансы</li>
            <li>Продажи и закупки</li>
          </ul>
        </div>
      </div>
    </section>

    <div class="container mb-4">
      <feedback-form>
        <h2>Оставьте заявку</h2>
        <p class="text-center">
          и получите расчет аутсорсинга по вашим требованиям
        </p>
      </feedback-form>
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
        </div>
        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/headhunting.png">
          <span class="b">2</span>
          <h3>Мониторинг</h3>
          <p>
            Изучаем специфику Вашего бизнеса, проводим аудит на объекте для
            четкого понимания особенностей всех работ
          </p>
        </div>
        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/requirements.png">
          <span class="b">3</span>
          <h3>Формируем коммерческое предложение</h3>
        </div>
        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/contract.png">
          <span class="b">4</span>
          <h3>Заключаем договор</h3>
        </div>
        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/staff.png">
          <span class="b">5</span>
          <h3>Начинаем работать</h3>
          <p>Предоставляем Вам персонал согласно заявке</p>
        </div>
        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/hired.png">
          <span class="b">6</span>
          <h3>Реализация проекта</h3>
          <p>Администрируем проект персональным менеджером</p>
        </div>
        <div class="card-blue">
          <img class="card-img" src="/img/icons-hr/insurance.png">
          <span class="b">7</span>
          <h3>Качественная обратная связь</h3>
          <p>Вы получили желаемый результат</p>
        </div>
      </div>
    </section>
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

$dark-blue: mix($blue, $black, 40%);

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
  max-width: 5rem;
  height: auto;
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

.card-light {
  background: mix($blue, $white, 20%);
  border-radius: 1rem;
  border: 1px solid mix($blue, $white, 40%);
  padding: 0.5rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
