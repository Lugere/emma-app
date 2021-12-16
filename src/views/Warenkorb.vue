<template>
    <div id="Warenkorb">
        <div class="cart-container" v-if="cart.length > 0">
            <div class="cart-item" v-for="(item, key) in cart" :key="key">
                <div class="image">
                    <img :src="getImageUrl(item.imgName)" alt="" />
                </div>
                <div class="quantity">
                    <button class="change-quantity decrement" @click="decrementQuantity(item)">
                        <i class="fas fa-minus" />
                    </button>
                    <span class="quantity-text">{{ item.quantity }}</span>
                    <button class="change-quantity increment" @click="incrementQuantity(item)">
                        <i class="fas fa-plus" />
                    </button>
                </div>
                <div class="description">{{ item.desc }}</div>
                <div class="price">{{ (item.price * item.quantity).toFixed(2) }}€</div>
            </div>
            <div class="total">
                <div class="total-text">Zwischensumme (inkl. MwSt.)</div>
                <div class="total-price">{{ total }}€</div>
            </div>
        </div>
        <div class="cart-is-empty" v-else>
            <i class="fas fa-shopping-basket" />
            <span> Dein Warenkorb<br />ist leer </span>
        </div>
    </div>
</template>

<script src="./Warenkorb.ts" lang="ts"></script>

<style src="./Warenkorb.scss" lang="scss"></style>
