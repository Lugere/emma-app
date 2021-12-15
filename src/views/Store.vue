<template>
    <div id="Store">
        <div class="product-list">
            <div class="product" v-for="(product, key) in products" :key="key">
                <div class="price">{{ product.price }}€</div>
                <div
                    @click="removeFromCart(key)"
                    class="remove-from-cart"
                    :class="{ show: product.isInCart }"
                >
                    <i class="fas fa-times"></i>
                </div>
                <div class="image">
                    <img :src="getImageUrl(product.imgName)" alt="" />
                </div>
                <div class="description">{{ product.desc }}</div>
                <div class="action">
                    <button
                        class="to-cart-btn"
                        @click="addToCart(product.prodId)"
                        :class="{ 'is-in-cart': isInCart(product.prodId) }"
                        :disabled="isInCart(product.prodId)"
                    >
                        <div class="text" v-if="!isInCart(product.prodId)">In den Warenkorb</div>
                        <div class="text" v-else>Im Warenkorb</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./Store.ts" lang="ts"></script>

<style src="./Store.scss" lang="scss"></style>
