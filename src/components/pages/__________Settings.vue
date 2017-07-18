<template>
  <div class="settings">
    <div class="entity-heading">
      <h2 class="entity-group-title">Настройки</h2>
    </div>
    <!-- START: settings top block-->
    <div class="settings-block settings-block--top">
      <div class="settings-block__inner settings-block__inner--currency">
        <div class="settings-group-holder">
          <h3 class="settings-group-title">Валюта</h3>
        </div>
        <div class="settings-list-general">
          <div class="settings-list__all-currency">
            <div class="settings-list-holder">
              <span class="settings-list-title">Список валют:</span>
            </div>
            <div class="settings-list-wrapper">
              <ul class="settings-list">
                <li class="settings-list__item">
                  <input type="checkbox" name="currency" id="cur1" checked>
                  <label for="cur1"><span></span>USD - доллар</label>
                </li>
                <li class="settings-list__item">
                  <input type="checkbox" name="currency" id="cur2" checked>
                  <label for="cur2"><span></span>RUB - рубль</label>
                </li>
                <li class="settings-list__item">
                  <input type="checkbox" name="currency" id="cur3" checked>
                  <label for="cur3"><span></span>UAH - гривна</label>
                </li>
                <li class="settings-list__item">
                  <input type="checkbox" name="currency" id="cur4">
                  <label for="cur4"><span></span>AUD - австралийский долар</label>
                </li>
                <li class="settings-list__item">
                  <input type="checkbox" name="currency" id="cur5">
                  <label for="cur5"><span></span>THB - бат</label>
                </li>
                <li class="settings-list__item">
                  <input type="checkbox" name="currency" id="cur6">
                  <label for="cur6"><span></span>GBR - английский  фунт стерлинг</label>
                </li>
                <li class="settings-list__item">
                  <input type="checkbox" name="currency" id="cur7">
                  <label for="cur7"><span></span>AUD - австралийский доллар</label>
                </li>
                <li class="settings-list__item">
                  <input type="checkbox" name="currency" id="cur8">
                  <label for="cur8"><span></span>THB - бат</label>
                </li>
                <li class="settings-list__item">
                  <input type="checkbox" name="currency" id="cur9">
                  <label for="cur9"><span></span>GBR - английский  фунт стерлинг</label>
                </li>
                <li class="settings-list__item">
                  <input type="checkbox" name="currency" id="cur10">
                  <label for="cur10"><span></span>AUD - австралийский доллар</label>
                </li>
                <li class="settings-list__item">
                  <input type="checkbox" name="currency" id="cur11">
                  <label for="cur11"><span></span>THB - бат</label>
                </li>
              </ul>
            </div>
          </div>
          <div class="settings-list__default-currency">
            <div class="settings-list-holder">
              <span class="settings-list-title">Валюта по умолчанию:</span>
            </div>
            <div class="settings-list-wrapper">
              <ul class="settings-list">
                <li class="settings-list__item">
                  <input type="radio" name="currency" id="def-cur1">
                  <label for="def-cur1"><span></span>USD - доллар</label>
                </li>
                <li class="settings-list__item">
                  <input type="radio" name="currency" id="def-cur2">
                  <label for="def-cur2"><span></span>RUB - рубль</label>
                </li>
                <li class="settings-list__item">
                  <input type="radio" name="currency" id="def-cur3">
                  <label for="def-cur3"><span></span>UAH - гривна</label>
                </li>
                <li class="settings-list__item">
                  <input type="radio" name="currency" id="def-cur4">
                  <label for="def-cur4"><span></span>GBR - английский  фунт стерлинг</label>
                </li>
                <li class="settings-list__item">
                  <input type="radio" name="currency" id="def-cur5">
                  <label for="def-cur5"><span></span>RUB - рубль</label>
                </li>
                <li class="settings-list__item">
                  <input type="radio" name="currency" id="def-cur6">
                  <label for="def-cur6"><span></span>UAH - гривна</label>
                </li>
              </ul>
            </div>
          </div>
          <div class="settings-list__exchange-rate">
            <div class="settings-list-holder">
              <span class="settings-list-title">Курс валют:</span>
            </div>
            <div class="settings-list-wrapper">
              <ul class="settings-list">
                <li class="settings-list__item">
                  <input type="text" class="form-field form-field--fullwidth">
                </li>
                <li class="settings-list__item">
                  UAH - 0.27
                </li>
                <li class="settings-list__item">
                  USD - 26.1950
                </li>
                <li class="settings-list__item settings-list__item--note">
                  * Курс по Сбербанку России
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="settings-block__inner settings-block__inner--lang">
        <div class="settings-group-holder">
          <h3 class="settings-group-title">Язык</h3>
        </div>
        <div class="settings-list-wrapper--def-leng">
          <ul class="settings-list">
            <li class="settings-list__item">
              <input type="radio" name="currency" id="lang1">
              <label for="lang1"><span></span>Русский</label>
            </li>
            <li class="settings-list__item">
              <input type="radio" name="currency" id="lang2">
              <label for="lang2"><span></span>Український</label>
            </li>
            <li class="settings-list__item">
              <input type="radio" name="currency" id="lang3">
              <label for="lang3"><span></span>English</label>
            </li>
          </ul>
        </div>
        <div class="settings-list-wrapper settings-list-wrapper--lang">
          <ul class="settings-list">
            <li class="settings-list__item">
              <input type="radio" name="currency" id="lang4">
              <label for="lang4"><span></span>По алфавиту</label>
            </li>
            <li class="settings-list__item">
              <input type="radio" name="currency" id="lang5">
              <label for="lang5"><span></span>По алфавиту</label>
            </li>
            <li class="settings-list__item">
              <input type="radio" name="currency" id="lang6">
              <label for="lang6"><span></span>По алфавиту</label>
            </li>
            <li class="settings-list__item">
              <input type="radio" name="currency" id="lang7">
              <label for="lang7"><span></span>По алфавиту</label>
            </li>
            <li class="settings-list__item">
              <input type="radio" name="currency" id="lang8">
              <label for="lang8"><span></span>По алфавиту</label>
            </li>
            <li class="settings-list__item">
              <input type="radio" name="currency" id="lang9">
              <label for="lang9"><span></span>По алфавиту</label>
            </li>
            <li class="settings-list__item">
              <input type="radio" name="currency" id="lang10">
              <label for="lang10"><span></span>По алфавиту</label>
            </li>
            <li class="settings-list__item">
              <input type="radio" name="currency" id="lang11">
              <label for="lang11"><span></span>По алфавиту</label>
            </li>
            <li class="settings-list__item">
              <input type="radio" name="currency" id="lang12">
              <label for="lang12"><span></span>По алфавиту</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- END: settings top block-->

    <!-- START: settings centr block-->
    <div class="settings-block settings-block--center">
      <div class="settings-block__inner">
        <div class="settings-group-holder">
            <h3 class="settings-group-title">Категории и спецификации</h3>
        </div>
        <div class="settings-category">
          <a href="#" class="entity-add-btn">
            <span class="entity-add-btn__plus">+</span>
            <span class="entity-add-btn__text">Добавить категорию</span>
          </a>
          <div class="category-section">
            <div class="category-section__name">
              <span class="category-section__name-title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</span>
              <div class="category-section__bnt" type="button">
                <button class="edit-popup-btn">
                  <icon name="pencil" class="edit-settings__icon" />
                </button>
                <button class="delete-popup-btn" type="button">
                  <icon name="trash" class="delete-settings__icon" />
                </button>
              </div>
            </div>
            <div class="category-section__desk">
                <a href="#" class="entity-add-btn">
                  <span class="entity-add-btn__plus">+</span>
                  <span class="entity-add-btn__text">Добавить спецификацию</span>
                </a>
                <div class="specification-section">
                  <ul class="specification-list">
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="category-section">
            <div class="category-section__name">
              <span class="category-section__name-title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</span>
              <div class="category-section__bnt">
                <button class="edit-popup-btn" type="button">
                  <icon name="pencil" class="edit-settings__icon" />
                </button>
                <button class="delete-popup-btn" type="button">
                  <icon name="trash" class="delete-settings__icon" />
                </button>
              </div>
            </div>
            <div class="category-section__desk">
                <a href="#" class="entity-add-btn">
                  <span class="entity-add-btn__plus">+</span>
                  <span class="entity-add-btn__text">Добавить спецификацию</span>
                </a>
                <div class="specification-section">
                  <ul class="specification-list">
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                    <li class="specification-list__item">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img src="../../assets/img/desktop-icon.png" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</h4>
                        </div>
                      </div>
                      <button class="edit-popup-btn" type="button">
                        <icon name="pencil" class="edit-settings__icon" />
                      </button>
                      <button class="delete-popup-btn" type="button">
                        <icon name="trash" class="delete-settings__icon" />
                      </button>
                    </li>
                  </ul>
                </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    <!-- END: settings centr block-->
    
    <!-- START: settings bottom block-->
    <div class="settings-block settings-block--bottom">
      <div class="settings-block__inner">
        <div class="settings-group-holder">
            <h3 class="settings-group-title">Статусы</h3>
        </div>
        <div class="settings-indecators">
          <div class="settings-indecators__wrapper">
            <div class="settings-list-holder">
              <span class="settings-list-title">Статусы по умолчанию:</span>
            </div>
            <ul class="settings-list settings-list--indicator">
              <li class="settings-list__item">
                <span class="entity-infolist__status-indicator"></span>
                <span class="entity-infolist__status-name">Свободен</span>
              </li>
              <li class="settings-list__item">
                <span class="entity-infolist__status-indicator underway"></span>
                <span class="entity-infolist__status-name">В работе</span>
              </li>
              <li class="settings-list__item">
                <span class="entity-infolist__status-indicator repair"></span>
                <span class="entity-infolist__status-name">В ремонте</span>
              </li>
              <li class="settings-list__item">
                <span class="entity-infolist__status-indicator used"></span>
                <span class="entity-infolist__status-name">Списан</span>
              </li>
            </ul>
          </div>

          <div class="settings-indecators__wrapper">
            <div class="settings-list-holder">
              <span class="settings-list-title">Мои статусы:</span>
            </div>
            <ul class="settings-list settings-list--indicator">
              <li class="settings-list__item" v-for="status in statuses">
                <span class="entity-infolist__status-indicator" :style="{backgroundColor: status.color}"></span>
                <span class="entity-infolist__status-name">{{status.title}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="settings-indecators settings-indecators--color-picker ">
          <div class="settings-list-holder">
            <span class="settings-list-title">Добавьте статус:</span>
          </div>
        </div>

        <div class="settings-colorpicker">
          <color-picker @color-selected="setNewColor"/>
          <div class="settings-colorpicker__status-name">
            <input type="text" placeholder="Название статуса" class="form-field form-field--colorpicker" v-model="newStatusTitile">
            <button class="colorpicker-btn" type="button" @click="addNewStatus">
              <icon name="floppy-o" class="edit-settings__icon" />
            </button>
          </div>
        </div>

      </div>
    </div>
    <!-- END: settings bottom block-->
  </div>
</template>

<script>
import 'vue-awesome/icons/pencil'
import 'vue-awesome/icons/trash'
import 'vue-awesome/icons/angle-down'
import 'vue-awesome/icons/floppy-o'
import ColorPicker from '@/components/ColorPicker'

export default {
  name: 'settings',
  data () {
    return {
      selectedColor: '',
      newStatusTitile: '',
      statuses: [
        {color: '#cddc39', title: 'status 1'},
        {color: '#ff9000', title: 'status 1'},
        {color: '#cddc39', title: 'status 1'},
        {color: '#2c3c44', title: 'status 1'}
      ]
    }
  },
  components: {
    ColorPicker
  },
  methods: {
    setNewColor (newColor) {
      this.selectedColor = newColor.hex
    },
    addNewStatus () {
      if (!this.selectedColor && !this.newStatusTitile) {
        return
      }
      let newStatus = {
        color: this.selectedColor,
        title: this.newStatusTitile
      }
      this.statuses.push(newStatus)
    }
  }
}
</script>

<style src="@/assets/scss/components/settings-scoped.scss" lang="scss" scoped></style>
