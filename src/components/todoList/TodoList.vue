<script setup>
import { ref, reactive, onMounted } from "vue";
import DB from "@/services/DB";
import TodoListAddForm from "./TodoListAddForm.vue";
import TodoListFooter from "./TodoListFooter.vue";
import Todo from "./Todo.vue";

const props = defineProps({
  apiURL: { type: String, required: true },
});

// Je crée une constente pour représenter un tableau vide qui
//vas acceuillir les todo
const todos = reactive([]);

// Async car on attend un retour de l'API DB
// onMounted exécute une fonction une fois que le composant est monté dans le DOM.
//Il sert pour initialiser des données, lancer des requêtes ou manipuler le DOM après le rendu.
// onMounted c'est Un hook est un point d’entrée prévu par Vue pour exécuter ton propre code à 
//un moment précis du cycle de vie du composant.
//En clair : Vue te “donne un crochet” auquel tu t’accroches pour agir quand le composant se crée,
//se monte, se met à jour ou se détruit.
onMounted(async() => {
  DB.setApiURL(props.apiURL);
  // 0 → position de départ dans le tableau.
  // todos.length → supprime tous les éléments existants (du début jusqu’à la fin).
  // ...(await DB.findAll()) → insère tous les éléments retournés par la base à la place.
  todos.splice(0, todos.length, ...(await DB.findAll()));
});


// function CRUD
const creatItem =async(content) =>{
  // lancer DB.create qui retourne la todo  avec son id
  //on envoit le nouveau content à DB.create qui retourne un todo complète
  const todo = await DB.create(content);
  todos.push(todo);
  // Ajouter dans la todos
}
const deleteOneById= async(id)=>{
  await DB.deleteOneById(id);
  // index de la todo qui est égale à l'id
  todos.splice(todos.findIndex((todo)=>todo.id===id),1);
}
</script>
<template>
  <!-- CARD LISTE -->
  <section
    class="bg-slate-100 rounded-xl shadow ring-1 ring-slate-200/60 overflow-hidden"
    aria-labelledby="todo-heading"
  >
    <h2 id="todo-heading" class="sr-only">Todo list</h2>

    <!-- INPUT PRINCIPAL -->
    <TodoListAddForm @on-submit-add-form="creatItem"/>

    <!-- LISTE DES TODOS -->
    <ul class="m-4 divide-y divide-slate-200 text-slate-800" role="list" aria-label="Todos">
      <!-- ITEM (exemple) -->
       <!-- si je change todo je change todo.id et "todo"
        si je modifie :todo je dois changer dans le script son nom const props = defineProps({
    todo:{type: Object, required: true}
})-->
      <todo v-for="todo in todos" :key="todo.id" :todo="todo" @on-delete="deleteOneById($event)"/>
    </ul>

    <!-- FOOTER DE LISTE -->
    <TodoListFooter />
  </section>
</template>
<style scoped></style>
