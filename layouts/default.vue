<template>
  <div>
    <div class="leader container">
      <logo />
      <ul class="main-menu">
        <li>
          <nuxt-link to="/services"> Услуги </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/clients"> Опыт и клиенты </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/manufacture"> Производство </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/advantages"> Преимущества </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact"> Контакты </nuxt-link>
        </li>
      </ul>
      <span class="phone"> <span class="small">+7 (8412)</span> 20-73-18 </span>
    </div>

    <nuxt />

    <footer class="footer container">
      <div class="col-4">
        <p>
          <span class="site-desc">© 2013—2021 ООО «ВЭК&nbsp;СЕРВИС»</span>
        </p>
        <p>
          <nuxt-link to="/policy"> Политика конфиденциальности </nuxt-link>
        </p>
      </div>
      <div class="col-4">
        <p>
          <nuxt-link to="/contact">
            г.&nbsp;Пенза, ул.&nbsp;Ставского, 4, оф.&nbsp;4
          </nuxt-link>
        </p>
        <p>
          <a href="mailto:info@vekservis.ru">info@vekservis.ru</a>
        </p>
      </div>
      <div class="col-4">
        <p class="text-right">
          <span class="phone">
            <span class="small">+7&nbsp;(8412)</span> 20-73-18
          </span>
        </p>
      </div>
    </footer>

    <link rel="stylesheet" href="https://cdn.envybox.io/widget/cbk.css" />
    <!-- Yandex.Metrika counter -->
    <noscript><div><img src="https://mc.yandex.ru/watch/45245817" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head() {
    return {
      script: [
        /* {
          innerHTML: 'WebFormSettings = { btn_text: "Оставить заявку", btn_text_color: "#ffffff", btn_color: "#0c4b8c", btn_border_color: "#ffffff", btn_position: "right", account_name: "vekservis", site_url: "https://help.vekservis.ru/" }; var scriptTag = document.createElement("script"); scriptTag.type = "text/javascript";scriptTag.charset = "utf-8"; scriptTag.src = ("https://help.vekservis.ru/web-form/web-form.js"); document.body.appendChild(scriptTag);',
          id: 'okdesk-script',
          type: 'text/javascript',
          body: true
        }, */
        {
          src: 'https://cdn.envybox.io/widget/cbk.js?wcb_code=fd8b1b058a9498d579099a6e3f599eb6',
          type: 'text/javascript',
          charset: 'UTF-8',
          async: true,
          body: true
        },
        // Call tracking.
        {
          innerHTML: '(function(window,document,n,project_ids){window.GudokData = n;if(typeof project_ids !== "object"){project_ids = [project_ids]};window[n] = { };window[n]["projects"]=project_ids;config_load(project_ids.join(","));function config_load(cId){var a=document.getElementsByTagName("script")[0],s=document.createElement("script"),i=function(){a.parentNode.insertBefore(s, a)},cMrs="";s.async=true;if(document.location.search&&document.location.search.indexOf("?gudok_check=")===0)cMrs+=document.location.search.replace("?","&");s.src="//mod.gudok.tel/script.js?sid="+cId+cMrs;if(window.opera == "[object Opera]"){document.addEventListener("DOMContentLoaded", i, false)}else{i()}}})(window, document, "gd", "0rgg0dapbn");',
          type: 'text/javascript',
          body: true
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  }
}
</script>
