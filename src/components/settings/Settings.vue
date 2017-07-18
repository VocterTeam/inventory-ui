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
                <li class="settings-list__item" v-for="(currency, index) in showCurrencies">
                  <input type="checkbox" name="currency" :id="'currency' + (index + 1)" :checked="currency.isDefault" />
                  <label :for="'currency' + (index + 1)">{{currency.symbol}}</label>
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
                <li class="settings-list__item" v-for="(currency, index) in showCurrencies">
                  <input type="radio" name="currency" :id="'default-currency' + (index + 1)" :checked="currency.isDefault" />
                  <label :for="'default-currency' + (index + 1)">{{currency.symbol}}</label>
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
                <li class="settings-list__item">UAH - 0.27</li>
                <li class="settings-list__item">USD - 26.1950</li>
                <li class="settings-list__item settings-list__item--note">* Курс по Сбербанку России</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- START: settings bottom block-->
      <div class="settings-block__inner settings-block--status">
        <div class="settings-group-holder">
            <h3 class="settings-group-title">Статусы</h3>
        </div>
        <div class="settings-indecators">
          <div class="settings-indecators__wrapper">
            <div class="settings-list-holder">
              <span class="settings-list-title">Статусы по умолчанию:</span>
            </div>
            <ul class="settings-list settings-list--indicator">
              <li class="settings-list__item" v-for="status in statusesDefault">
                <span class="entity-infolist__status-indicator"></span>
                <span class="entity-infolist__status-name">{{status.title}}</span>
              </li>
            </ul>
          </div>

          <div class="settings-indecators__wrapper">
            <div class="settings-list-holder">
              <span class="settings-list-title">Мои статусы:</span>
            </div>
            <ul class="settings-list settings-list--indicator">
              <li class="settings-list__item" v-for="status in statusesCustom">
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
          <color-picker @color-selected="setNewColor" />
          <div class="settings-colorpicker__status-name">
            <input type="text" placeholder="Название статуса" class="form-field form-field--colorpicker" v-model="newStatusTitile">
            <button class="colorpicker-btn" type="button" @click="addNewStatus">
              <icon name="floppy-o" class="edit-settings__icon" />
            </button>
          </div>
        </div>

      </div>
    <!-- END: settings bottom block-->
    </div>
    <!-- END: settings top block-->
    <!-- START: settings centr block-->
    <div class="settings-block settings-block--center">
      <div class="settings-block__inner">
        <div class="settings-group-holder">
            <h3 class="settings-group-title">Категории и спецификации</h3>
        </div>
        <!-- settings-category -->
        <div class="settings-category">
          <!-- entity-add-btn -->
          <a href="#" class="entity-add-btn">
            <span class="entity-add-btn__plus">+</span>
            <span class="entity-add-btn__text">Добавить категорию</span>
          </a>
          <!-- END:entity-add-btn -->
          <div class="category-section" v-for="category in showCategories">
            <!-- category-section__name -->
            <div class="category-section__name">
              <span class="category-section__name-title">{{category}}</span>
              <div class="category-section__bnt" type="button">
                <button class="edit-popup-btn">
                  <icon name="pencil" class="edit-settings__icon" />
                </button>
                <button class="delete-popup-btn" type="button">
                  <icon name="trash" class="delete-settings__icon" />
                </button>
              </div>
            </div>
            <!-- END:category-section__name -->
            <!-- category-section__desk -->
            <div class="category-section__desk">
                <!-- entity-add-btn -->
                <a href="#" class="entity-add-btn">
                  <span class="entity-add-btn__plus">+</span>
                  <span class="entity-add-btn__text">Добавить спецификацию</span>
                </a>
                <!-- END:entity-add-btn -->
                <!-- specification-section -->
                <div class="specification-section">
                  <ul class="specification-list">
                    <li class="specification-list__item" v-for="specification in getCategorySpecifications(category)">
                      <div class="specification-list__main">
                        <div class="entity-infolist__icon">
                          <img :src="specification.photo" alt="icon">
                        </div>
                        <div class="entity-infolist-spec">
                          <h4 class="entity-infolist-spec__title">{{specification.type}}</h4>
                        </div>
                      </div>
                      <div class="category-section__bnt" type="button">
                        <button type="button" class="edit-popup-btn">
                          <icon name="pencil" class="edit-settings__icon" />
                        </button>
                        <button type="button" class="delete-popup-btn">
                          <icon name="trash" class="delete-settings__icon" />
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- END:specification-section -->
            </div>
            <!-- END:category-section__desk -->
          </div>
        </div>
        <!-- END:settings-category -->
      </div>
    </div>
    <!-- END: settings centr block-->
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import 'vue-awesome/icons/pencil'
import 'vue-awesome/icons/trash'
import 'vue-awesome/icons/angle-down'
import 'vue-awesome/icons/floppy-o'
import ColorPicker from '@/components/common/ColorPicker'

export default {
  name: 'settings',
  data () {
    return {
      selectedColor: '',
      newStatusTitile: ''
    }
  },
  components: {
    ColorPicker
  },
  computed: {
    ...mapGetters([
      'currencies',
      'statuses',
      'categories',
      'getAllStatuses',
      'getCategorySpecifications'
    ]),
    showCurrencies () {
      return this.currencies
    },
    statusesDefault () {
      return this.getAllStatuses(1)
    },
    statusesCustom () {
      return this.getAllStatuses(0)
    },
    showCategories () {
      return this.categories
    }
  },
  methods: {
    ...mapActions([
      'getStatuses',
      'getCurrencies',
      'getCategories',
      'getSpecifications'
    ]),
    setNewColor (newColor) {
      this.selectedColor = newColor.hex
    },
    addNewStatus () {
      if (!this.selectedColor && !this.newStatusTitile) {
        return
      }
      let newStatus = {
        color: this.selectedColor,
        isDefault: 0,
        date: new Date(),
        title: this.newStatusTitile,
        description: ''
      }
      this.statuses.push(newStatus)
    }
  },
  mounted () {
    this.getStatuses()
    this.getCurrencies()
    this.getCategories()
    this.getSpecifications()
  }
}
</script>

<style src="@/assets/scss/components/settings-scoped.scss" lang="scss" scoped />
