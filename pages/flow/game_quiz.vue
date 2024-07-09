<template>
    <div class="container mx-auto px-4 py-20">

        <div class="mt-6 text-center text-balance">
            <h1 class="font-bold text-2xl text-secondaryBlue">Permainan</h1>
            <h2 class="font-bold text-3xl mb-3 text-secondaryBlue">Mencocokan</h2>
            <div class="text-content mb-6">
                Cocokan pilihan yang terdapat dalam kolom 1 dengan pilihan pada kolom 2.
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <h2>Kolom 1</h2>
                <button class="option-button" @click="selectOption('C')">C</button>
                <button class="option-button" @click="selectOption('A')">A</button>
                <button class="option-buttons" @click="selectOption('B')">B</button>
            </div>
            <div class="column">
                <h2>Kolom 2</h2>
                <button class="option-buttons" @click="selectOption('B')">B</button>
                <button class="option-button" @click="selectOption('A')">A</button>
                <button class="option-button" @click="selectOption('C')">C</button>
            </div>
        </div>

        <div class="button-group">
            <NuxtLink to="/flow/question">
                  <button class="option-buttons wide-button bg-amber-500 mt-4 rounded-lg h-10 w-40 xs:w-full flex items-center justify-center text-white" @click="checkAnswer">MULAI</button>
                </NuxtLink>   
        </div>
    </div>
    <NavBottom/>
</template>

<style scoped>
.columns {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.column {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.option-button {
    background-color: #fdf9f9;
    color: #000000;
    padding: 10px 50px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin: 10px 0;
}

.option-buttons {
    background-color: rgb(255, 193, 24);
    color: #000000;
    padding: 10px 50px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin: 10px 0;
}

.option-button:hover {
    background-color: rgb(230, 127, 43);
}

.button-group {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.wide-button {
    width: 100%;
    max-width: 750px; /* Anda bisa menyesuaikan nilai ini sesuai kebutuhan */
}
</style>
