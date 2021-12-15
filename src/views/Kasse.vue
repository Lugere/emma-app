<template>
    <div id="Kasse">
        <form>
            Ihre Adressdaten
            <section class="form-item">
                <label for="name">Name</label>
                <input autocomplete="name" name="name" type="text" />
                <section class="form-item">
                    <label for="email">E-Mail</label>
                    <input autocomplete="email" name="email" type="text" />
                </section>
            </section>
            <section class="form-item street">
                <section>
                    <label for="street">Straße</label>
                    <input autocomplete="street" name="street" type="text" />
                </section>
                <section>
                    <label for="house-nr">Nr.</label>
                    <input autocomplete="house-nr" name="house-nr" type="text" />
                </section>
            </section>
            <section class="form-item">
                <label for="">PLZ</label>
                <input autocomplete="postal-code" name="postal-code" type="text" />
                <section class="form-item">
                    <label for="city">Ort</label>
                    <input autocomplete="city" name="city" type="text" />
                </section>
            </section>
        </form>
    </div>
</template>

<script src="./Kasse.ts" lang="ts"></script>

<style src="./Kasse.scss" lang="scss"></style>
