<template>
    <div id="Store">
        <div class="product-list" v-if="products.length > 0">
            <div class="product" v-for="product in products" :key="product.prodId">
                <div class="price">{{ product.price }}€</div>
                <div
                    @click="removeFromCart(product)"
                    class="remove-from-cart"
                    :class="{ show: isInCart(product) }"
                >
                    <i class="fas fa-times"></i>
                </div>
                <div class="image">
                    <img :src="getImageUrl(product.imgName)" alt="" />
                </div>
                <div class="description">{{ product.description }}</div>
                <div class="action">
                    <button
                        class="to-cart-btn"
                        @click="addToCart(product)"
                        :disabled="isInCart(product)"
                    >
                        <div class="text" v-if="!isInCart(product.prodId)">In den Warenkorb</div>
                        <div class="text" v-else>Im Warenkorb</div>
                    </button>
                </div>
            </div>
        </div>
        <div class="product-list-is-empty" v-else>
            <i class="fas fa-store" />
            <span> Es gibt noch keine Produkte</span>
        </div>
    </div>
</template>

<script src="./Store.ts" lang="ts"></script>

<style src="./Store.scss" lang="scss"></style>
