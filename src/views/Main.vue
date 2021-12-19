<template>
    <div id="Main">
        <div class="outer-container">
            <div class="header">
                <div class="logo">warko</div>
                <div class="search">
                    <input class="search-input" type="text" />
                    <i class="fas fa-search" />
                </div>
            </div>
            <nav class="nav-bar">
                <ul class="list">
                    <li id="store" class="item" :class="{ active: checkRoute('/Store') }">
                        <i class="fas fa-store" />
                        <span> Einkauf </span>
                    </li>
                    <li id="cart" class="item" :class="{ active: checkRoute('/Warenkorb') }">
                        <i class="fas fa-shopping-cart" />
                        <div class="badge" :class="{ show: cartCount > 0 }">
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
            <div class="inner-container">
                <router-view />
            </div>
            <div class="actions">
                <button class="button primary" @click="previousStep()" v-if="isPreviousButton()">
                    <div class="text">Zurück</div>
                </button>
                <button
                    class="button success"
                    @click="nextStep()"
                    :disabled="isNextButtonDisabled()"
                >
                    <div class="text">
                        {{ nextButtonText() }}
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script src="./Main.ts" lang="ts"></script>

<style src="./Main.scss" lang="scss"></style>
