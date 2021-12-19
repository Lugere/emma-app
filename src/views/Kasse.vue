<template>
    <div id="Kasse">
        <div class="split">
            <div class="cart-list">
                <div class="title">Besellung überprüfen</div>
                <div class="item" v-for="(item, key) in cart" :key="key">
                    <div class="quantity">{{ item.quantity }}</div>
                    <div class="description">{{ item.description }}</div>
                    <div class="price">{{ (item.price * item.quantity).toFixed(2) }}€</div>
                </div>
                <div class="cart-is-empty" v-if="cart.length <= 0">
                    <i class="fas fa-shopping-basket" />
                    <span> Dein Warenkorb<br />ist leer </span>
                </div>
                <hr class="divider" v-if="cart.length > 0" />
                <div class="item shipping" v-if="cart.length > 0">
                    <i :class="`fas fa-${shippingOption.icon}`" />
                    <span class="description"> {{ shippingOption.label }}versand </span>
                    <div class="shipping-price">{{ shippingOption.price.toFixed(2) }}€</div>
                </div>
                <hr class="divider" v-if="cart.length > 0" />
                <div class="item total" v-if="cart.length > 0">
                    <div class="total-text">Gesamtbetrag (inkl. MwSt.)</div>
                    <div class="total-sum price">{{ totalSum }}€</div>
                </div>
            </div>
            <div class="additional-info">
                <div class="title">Versandadresse</div>
                <form class="address-form" @submit.prevent="">
                    <section class="form-item">
                        <label for="name">Name</label>
                        <input
                            autocomplete="name"
                            name="name"
                            type="text"
                            :value="address.name"
                            @change="updateAddress($event.currentTarget.value, 'name')"
                        />
                    </section>
                    <section class="form-item">
                        <label for="email">E-Mail</label>
                        <input
                            autocomplete="email"
                            name="email"
                            type="text"
                            :value="address.email"
                            @change="updateAddress($event.currentTarget.value, 'email')"
                        />
                    </section>
                    <section class="form-item street-nr">
                        <label for="street">Straße</label>
                        <input
                            class="street-input"
                            autocomplete="street"
                            name="street"
                            type="text"
                            :value="address.street"
                            @change="updateAddress($event.currentTarget.value, 'street')"
                        />
                        <section class="form-item house-nr">
                            <label for="house-nr">Nr.</label>
                            <input
                                class="house-nr-input"
                                autocomplete="house-nr"
                                name="house-nr"
                                type="text"
                                :value="address.number"
                                @change="updateAddress($event.currentTarget.value, 'number')"
                            />
                        </section>
                    </section>
                    <section class="form-item city-postal">
                        <label for="postal-code">PLZ</label>
                        <input
                            class="postal-code"
                            autocomplete="postal-code"
                            name="postal-code"
                            type="text"
                            :value="address.plz"
                            @change="updateAddress($event.currentTarget.value, 'plz')"
                        />
                        <section class="form-item city">
                            <label for="city">Ort</label>
                            <input
                                autocomplete="city"
                                name="city"
                                type="text"
                                :value="address.city"
                                @change="updateAddress($event.currentTarget.value, 'city')"
                            />
                        </section>
                    </section>
                    <div class="optional">Optional</div>
                    <section class="form-item phone">
                        <label for="phone">Mobil</label>
                        <input
                            autocomplete="tel"
                            name="phone"
                            type="text"
                            :value="address.phone"
                            @change="updateAddress($event.currentTarget.value, 'phone')"
                        />
                    </section>
                </form>
                <button
                    class="button success"
                    style="margin-left: 10px; display: grid; place-items: center"
                    @click="validate('address-form')"
                >
                    asdf
                </button>
                <section class="split payment-shipping">
                    <section class="payment-method">
                        <div class="title">Zahlungsart</div>
                        <section>
                            <button
                                @click="changePaymentMethod('paypal')"
                                class="button primary payment-method-item paypal"
                                :disabled="paymentMethod == 'paypal'"
                            >
                                <div class="text">
                                    <i class="fab fa-paypal" />
                                    PayPal
                                </div>
                            </button>
                            <button
                                @click="changePaymentMethod('amazon')"
                                class="button primary payment-method-item amazon"
                                :disabled="paymentMethod == 'amazon'"
                            >
                                <div class="text">
                                    <i class="fab fa-amazon-pay" />
                                    Amazon Pay
                                </div>
                            </button>
                            <button
                                @click="changePaymentMethod('credit-card')"
                                class="button primary payment-method-item credit-card"
                                :disabled="paymentMethod == 'credit-card'"
                            >
                                <div class="text">
                                    <i class="fas fa-credit-card" />
                                    Kreditkarte
                                </div>
                            </button>
                        </section>
                    </section>
                    <div class="shipping-options">
                        <div class="title">Versandoptionen</div>
                        <div class="options">
                            <button
                                v-for="(option, key) in shippingOptions"
                                :key="key"
                                class="button primary option standard"
                                @click="switchShippingOption(option)"
                                :disabled="shippingOption.type == option.type"
                            >
                                <div class="text">
                                    <i :class="`fas fa-${option.icon}`" />
                                    {{ option.label }}
                                </div>
                                <div class="price">+{{ option.price.toFixed(2) }}€</div>
                            </button>
                        </div>
                    </div>
                </section>
                <div class="arrival-date">
                    <span class="text"> Lieferung am {{ deliveryDate }} </span>
                    <span class="subtitle"> Wenn heute bestellt </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./Kasse.ts" lang="ts"></script>

<style src="./Kasse.scss" lang="scss"></style>

"<br />
<b>Fatal error</b>:  Uncaught PDOException: SQLSTATE[HY093]: Invalid parameter number: number of bound variables does not match number of tokens in C:\xampp\htdocs\warko-api\createEntry.php:18
Stack trace:
#0 C:\xampp\htdocs\warko-api\createEntry.php(18): PDOStatement-&gt;execute(Array)
#1 {main}
  thrown in <b>C:\xampp\htdocs\warko-api\createEntry.php</b> on line <b>18</b><br />
"