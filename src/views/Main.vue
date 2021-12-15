<template>
    <div id="Main">
        <div class="outer-container">
            <div class="header">
                <div class="logo">warko</div>
                <nav class="nav-bar">
                    <ul class="list">
                        <li id="store" class="item" :class="{ active: checkRoute('/Store') }">
                            <i class="fas fa-store" />
                            <span> Einkauf </span>
                        </li>
                        <li id="cart" class="item" :class="{ active: checkRoute('/Warenkorb') }">
                            <i class="fas fa-shopping-cart" />
                            <div
                                class="badge"
                                :class="{ 'show': cartCount > 0 }"
                                v-if="cartCount > 0"
                            >
                                {{ cartCount }}
                            </div>
                            <span> Warenkorb</span>
                        </li>
                        <li id="checkout" class="item" :class="{ active: checkRoute('/Kasse') }">
                            <i class="fas fa-cash-register" />
                            <span> Kasse </span>
                        </li>
                        <div class="indicator" />
                    </ul>
                </nav>
            </div>
            <div class="inner-container">
                <router-view />
            </div>
            <div class="actions">
                <button class="button primary" @mouseup="previousStep()">
                    <div class="text">Previous</div>
                </button>
                <button class="button success" @mouseup="nextStep()">
                    <div class="text">Next</div>
                </button>
            </div>
        </div>
    </div>
</template>

<script src="./Main.ts" lang="ts"></script>

<style src="./Main.scss" lang="scss"></style>
