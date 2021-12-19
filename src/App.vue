<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins";
    outline: none;
}

#app {
    -moz-background-size: cover;
    -o-background-size: cover;
    -webkit-background-size: cover;
    background-image: url("./assets/image/background.jpg");
    background-size: cover;
}

input {
    border: none;
    padding: 0.5em 1em;
    border-radius: 10px;
}

button {
    border: none;
    cursor: pointer;
    outline: none;
    text-transform: capitalize;
    transition: background-color 300ms ease;
    user-select: none;

    &[disabled] {
        cursor: default;
    }

    .text {
        transition: transform 300ms ease;
    }

    &:hover:not([disabled]) {
        .text {
            transform: translateY(-5px);
        }
    }

    &:active:not([disabled]) {
        .text {
            transform: scale(0.95);
        }
    }
}

.button {
    background-color: gray;
    border-radius: 8px;
    border: none;
    color: whitesmoke;
    cursor: pointer;
    font-size: 12pt;
    min-width: 150px;
    outline: none;
    padding: 1em 2em;
    text-transform: capitalize;
    transition: background-color 300ms ease;
    user-select: none;

    .text {
        transition: transform 300ms ease;
    }

    + button {
        margin-left: 10px;
    }

    &.primary {
        background-color: #0f223f;

        &:hover:not([disabled]) {
            background-color: #183c72;
        }

        &:active:not([disabled]) {
            background-color: #06101f;
        }

        &[disabled] {
            background-color: #0084ff;
            color: #0f223f !important;
        }
    }

    &.accent {
        background-color: #0084ff;

        &:hover:not([disabled]) {
            background-color: #1a90ff;
        }

        &:active:not([disabled]) {
            background-color: #006ed5;
        }

        &[disabled] {
            background-color: #689ed0;
            color: #0f223f !important;
        }
    }

    &.success {
        background-color: #07c774;
        color: #0f223f;

        &:hover:not([disabled]) {
            background-color: #00df7e;
        }

        &:active:not([disabled]) {
            background-color: #06c070;
        }

        &[disabled] {
            background-color: #8ce8be;
            color: #0f223f !important;
        }
    }

    &.warning {
        background-color: #e4932a;

        &:hover:not([disabled]) {
            background-color: #ff9914;
        }

        &:active:not([disabled]) {
            background-color: #da800b;
        }

        &[disabled] {
            background-color: #ffd092;
            color: #0f223f !important;
        }
    }

    &.danger {
        background-color: #e42a2a;

        &:hover:not([disabled]) {
            background-color: #ff1414;
        }

        &:active:not([disabled]) {
            background-color: #da0b0b;
        }

        &[disabled] {
            background-color: #ffa0a0;
            color: #0f223f !important;
        }
    }
}

/* Scrollbar */

// width
::-webkit-scrollbar {
    border-radius: 3px;
    width: 8px;
}

// Track
::-webkit-scrollbar-track {
    background: transparent;
}

// Handle
::-webkit-scrollbar-thumb {
    background: #0f223f;
    border-radius: 5px;
}

// Handle on hover
::-webkit-scrollbar-thumb:hover {
    background: #289ef8;
    border-radius: 5px;
}

/* Selection Color */

::-moz-selection {
    /* Code for Firefox */
    color: white;
    background: #0f223f;
}

::selection {
    color: white;
    background: #e42a2a;
}
</style>
