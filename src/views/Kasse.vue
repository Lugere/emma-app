<template>
    <div id="Kasse">
        <div class="split">
            <div class="cart-list">
                <div class="title">Dein Warenkorb</div>
                <div class="item" v-for="(item, key) in cart" :key="key">
                    <div class="quantity">{{ item.quantity }}</div>
                    <div class="description">{{ item.desc }}</div>
                    <div class="price">{{ item.price }}€</div>
                </div>
                <div class="cart-is-empty" v-if="cart.length <= 0">
                    <i class="fas fa-shopping-basket" />
                    <span> Dein Warenkorb<br />ist leer </span>
                </div>
                <hr class="divider" />
                <div class="item shipping" v-if="cart.length > 0">
                    <i :class="`fas fa-${shippingOption.icon}`" />
                    <span class="description">
                        {{ shippingOption.label }}versand
                    </span>
                    <div class="shipping-price">
                        {{ shippingOption.price.toFixed(2) }}€
                    </div>
                </div>
                <div class="item total" v-if="cart.length > 0">
                    <div class="total-text">Summe (inkl. MwSt.)</div>
                    <div class="total-sum price">{{ totalSum }}€</div>
                </div>
            </div>
            <div class="additional-info">
                <div class="title">Deine Adressdaten</div>
                <form class="address-form">
                    <section class="form-item">
                        <label for="name">Name</label>
                        <input autocomplete="name" name="name" type="text" />
                    </section>
                    <section class="form-item">
                        <label for="email">E-Mail</label>
                        <input autocomplete="email" name="email" type="text" />
                    </section>
                    <section class="form-item street">
                        <section>
                            <label for="street">Straße</label>
                            <input
                                autocomplete="street"
                                name="street"
                                type="text"
                            />
                        </section>
                        <section class="house-nr">
                            <label for="house-nr">Nr.</label>
                            <input
                                class="house-nr-input"
                                autocomplete="house-nr"
                                name="house-nr"
                                type="text"
                            />
                        </section>
                    </section>
                    <section class="form-item city">
                        <label for="postal-code">PLZ</label>
                        <input
                            class="postal-code"
                            autocomplete="postal-code"
                            name="postal-code"
                            type="text"
                        />
                        <section class="form-item">
                            <label for="city">Ort</label>
                            <input
                                autocomplete="city"
                                name="city"
                                type="text"
                            />
                        </section>
                    </section>
                </form>
                <div class="shipping-options">
                    <div class="title">Versandoptionen</div>
                    <div class="options">
                        <button
                            v-for="(option, key) in shippingOptions"
                            :key="key"
                            class="button primary option standard"
                            @click="shippingOption = option"
                            :class="{ active: shippingOption == option }"
                        >
                            <i :class="`fas fa-${option.icon}`" />
                            <span class="text"> {{ option.label }} </span>
                            <div class="price">
                                {{ option.price.toFixed(2) }}€
                            </div>
                        </button>
                    </div>
                </div>
                <section class="payment-method">
                    <div class="title">Gewünschte Zahlungsart</div>
                    <section>
                        <button
                            @click="paymentMethod = 'paypal'"
                            :class="{ active: paymentMethod == 'paypal' }"
                            :disabled="paymentMethod == 'paypal'"
                            class="button primary payment-method-item paypal"
                        >
                            <div class="text">
                                <i class="fab fa-paypal" />
                                PayPal
                            </div>
                        </button>
                        <button
                            @click="paymentMethod = 'amazon'"
                            :class="{ active: paymentMethod == 'amazon' }"
                            :disabled="paymentMethod == 'amazon'"
                            class="button primary payment-method-item amazon"
                        >
                            <div class="text">
                                <i class="fab fa-amazon-pay" />
                                Amazon Pay
                            </div>
                        </button>
                        <button
                            @click="paymentMethod = 'credit-card'"
                            :class="{ active: paymentMethod == 'credit-card' }"
                            :disabled="paymentMethod == 'credit-card'"
                            class="button primary payment-method-item amazon"
                        >
                            <div class="text">
                                <i class="fas fa-credit-card" />
                                Kreditkarte
                            </div>
                        </button>
                    </section>
                </section>
            </div>
        </div>
    </div>
</template>

<script src="./Kasse.ts" lang="ts"></script>

<style src="./Kasse.scss" lang="scss"></style>
