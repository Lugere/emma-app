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

button {
    border: none;
    cursor: pointer;
    outline: none;
    text-transform: capitalize;
    transition: background-color 300ms ease;
    user-select: none;

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

input {
    border: none;
    padding: .5em 1em;
    border-radius: 10px;
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

    &:hover {
        .text {
            transform: translateY(-5px);
        }
    }

    &:active {
        .text {
            transform: scale(0.95);
        }
    }

    + button {
        margin-left: 10px;
    }

    &.primary {
        background-color: #0f223f;

        &:hover {
            background-color: #183c72;
        }

        &:active {
            background-color: #06101f;
        }
    }

    &.accent {
        background-color: #0084ff;

        &:hover {
            background-color: #1a90ff;
        }

        &:active {
            background-color: #006ed5;
        }
    }

    &.success {
        background-color: #07c774;

        &:hover {
            background-color: #00df7e;
        }

        &:active {
            background-color: #06c070;
        }
    }

    &.warning {
        background-color: #e4932a;

        &:hover {
            background-color: #ff9914;
        }

        &:active {
            background-color: #da800b;
        }
    }

    &.danger {
        background-color: #e42a2a;

        &:hover {
            background-color: #ff1414;
        }

        &:active {
            background-color: #da0b0b;
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
