<template>
  <div class="form-wrapper">
    <div class="form-title">
      <span class="form-title__text">Продукты</span>
    </div>
    <form name="product">
      <!-- .form-element -->
      <div class="form-element">
        <label class="form-label required">Введите полное название продукта</label>
        <form-select :options="productTitles" :selectedOption="selectedProductTitle" @selected="productName = $event" @addNew="" class="form-field form-field--fullwidth" v-focus/>
      </div>
      <!-- END:.form-element -->

      <!-- .form-element -->
      <div class="form-element">
        <label class="form-label required">Введите серийный номер</label>
        <input type="text" name="serialNumber" class="form-field form-field--fullwidth" data-vv-as='"Серийный номер"' v-validate="veeValidateSerialNumberRules" v-default-value="serialNumberExisting">
        <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
          <span v-if="errors.has('serialNumber')" class="form-errors">{{ errors.first('serialNumber') }}</span>
        </transition>
      </div>
      <!-- END:.form-element -->

      <div>
        <!-- guarantee -->
        <form-checkbox :id="'isGuaranteeCheckbox'" :value="isGuaranteeEdited" :label="'Гарантия на продукт'" :options="['Нет', 'Да']" @checkboxChanged="guaranteeToggle"/>
        
        <transition 
          enter-active-class="animated bounceIn"
          leave-active-class="animated bounceOut"
          >
          <div v-if="isGuaranteeEdited" class="form-element form-element--guarantee form-date-wrap">
            <div class="form-element__subelement">
              <label class="form-label">Начало гарантии:</label>
          
              <!-- .date-picker -->
              <div class="date-picker">
                <icon name="calendar" />
                <datepicker v-model="guarantee.start" class="form-date-picker" placeholder="дд.мм.гггг" />
              </div>
              <!-- END:.date-picker -->
            </div>
          
            <div class="form-element__subelement">
              <label class="form-label">Конец гарантии:</label>
              <!-- .date-picker -->
              <div class="date-picker">
                <icon name="calendar" />
                <datepicker v-model="guarantee.end" class="form-date-picker" placeholder="дд.мм.гггг" />
              </div>
              <!-- END:.date-picker -->
            </div>
          </div>
        </transition>
        <!-- END:guarantee -->

        <form-checkbox :id="'isStatusCheckbox'" :value="isNewExisting" :label="'Состояние продукта'" :options="['Б/У', 'Новый']" @checkboxChanged="statusToggle"/>
      </div>

      <!-- .form-element -->
      <div class="form-element">
        <label class="form-label">Валюта:</label>
        <form-select :options="allCurrencies" @selected="productName = $event" @addNew="" class="form-field form-field--inline form-select-currency" />
      </div>
      <!-- END:.form-element -->
    
      <!-- .form-element -->
      <div class="form-element">
        <label class="form-label required">Статус</label>
        <form-select :options="allStatuses" @selected="productName = $event" @addNew="" class="form-field form-field--fullwidth" />
      </div>
      <!-- END:.form-element -->

      <br /> 
      <div class="form-element form-button">
        <button type="reset" class="action-btn action-btn--info">Отменить</button>
        <button type="submit" class="action-btn action-btn--shadow action-btn--success">Добавить</button>
      </div>

    </form>
  </div>
</template>

<script>
import FormSelect from '@/components/productAdd/FormSelect'
import FormCheckbox from '@/components/productAdd/FormCheckbox'
import 'vue-awesome/icons/calendar'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'product-form',
  props: {
    productId: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      // serialNumberEdited: null,
      guarantee: {
        star: '',
        end: ''
      },
      isGuaranteeExisting: true,
      isNewExisting: true
    }
  },
  computed: {
    ...mapGetters([
      'products',
      'getProduct',
      'getProductsSerialNumbers',
      'getProductTitles',
      'getCurrenciesSymbols',
      'getStatusesTitles'
    ]),
    veeValidateSerialNumberRules () {
      return {
        required: true,
        numeric: true,
        not_in: this.getProductsSerialNumbers(this.productId)
      }
    },
    isGuaranteeEdited () {
      let product = this.getProduct(this.productId)
      if (product) {
        return product.isGuarantee
      } else {
        return this.isGuaranteeExisting
      }
    },
    selectedProductTitle () {
      let product = this.getProduct(this.productId)
      if (product) {
        return product.specification
      } else {
        return null
      }
    },
    serialNumberExisting () {
      let product = this.getProduct(this.productId)
      if (product) {
        return product.serialNumber
      } else {
        return null
      }
    },
    productTitles () {
      return this.getProductTitles
    },
    allCurrencies () {
      return this.getCurrenciesSymbols
    },
    allStatuses () {
      return this.getStatusesTitles
    }
  },
  methods: {
    ...mapActions([
      'getProducts',
      'getStatuses',
      'getCurrencies'
    ]),
    guaranteeToggle () {
      this.isGuaranteeExisting = !this.isGuaranteeExisting
    },
    statusToggle () {
      this.isNewExisting = !this.isNewExisting
    }
  },
  components: {
    FormSelect,
    FormCheckbox
  },
  mounted () {
    this.getProducts()
    this.getStatuses()
    this.getCurrencies()
  }
}
</script>
