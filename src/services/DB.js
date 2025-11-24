//@/services/DB.js
export default class DB {
  //static : on ne modifiera pas
  //function setApiURL
   //recoit des data qui sont ici apiURL de new ContactList
  //la DB recoit toute les méthode que l'on vas utiliser 
  static apiURL = "";

  static setApiURL(url) {
    //url venant de main new ContactList envoyer dans apiURL
    this.apiURL = url;
  }

  //static : on ne modifiera pas
  //async: on attend le retour de la DB
  static async findAll() {
    //je fetch= attends la réponse de this.apiURL qui reçoit des data qui sont l'addresse de la DB + le numéro de chaque todos
    const response = await fetch(this.apiURL + "todos");
    //je return "response" avec un .json(); pour garder le json
    return response.json();
  }

  //static : on ne modifiera pas
  //async: on attend le retour de la DB
  //on lui envoie des data qui sont les élément ajouter 
  static async create(data) {
    //je fetch= attends la réponse de this.apiURL qui reçoit des data qui sont l'addresse de la DB + le numéro de chaque todos
    //comme pour findAll sauf que j'ai en plus besoin de la methode POST
    const response = await fetch(this.apiURL + "todos", {
      method: "POST",
      //j'ai un headers qui contiens des donnée de type json de l'appilcation
      headers: { "Content-Type": "application/json" },
      //dans le body je stringify des donnée qui sont les nouvlles information de la data
      body: JSON.stringify({ 
        content: data.content,
        completed: data.completed,
        created_at: Date.now(),
      //on retourne dans asyncaddTodo(data)
      }),
  });
  //je return "response" avec un .json(); pour garder le json
  return response.json();
  }


  static async deleteOneById(data) {
    // Je fetch= attends la réponse de this.apiURL qui reçoit des data qui sont l'addresse de la DB + le numéro de chaque todos
    //je n'aibesoin que de la méthode DELETE pour l'id
    const response = await fetch(this.apiURL + "todos/" + data, {
      method: "DELETE",
    });
    return response.json();
  }

  static async updatOneById(contact) {
    //je fetch= attends la réponse de this.apiURL qui reçoit des data qui sont l'addresse de la DB + le numéro de chaque todos
    //comme pour findAll sauf que j'ai en plus besoin de la methode POST
    const response = await fetch(this.apiURL + "todos/" + contact.id, {
      //j'ai un headers qui contiens des donnée de type json de l'appilcation
      method: "PUT",
      //dans le body je stringify des donnée qui sont les nouvlles information de la data
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: contact.firstname,
        lastname: contact.lastname,
        email: contact.email,
      }),
    });
    //on retourne la response
    return response.json();
  }
}
