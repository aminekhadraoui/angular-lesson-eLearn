export class learn {
  id?: string;
  nom?: string;
  image?: string;
  prix?: string;
  description?: string;
  constructor(args: learn = {}) {
    this.id = args.id;
    this.nom = args.nom;
    this.image = args.image;
    this.prix = args.prix;
    this.description = args.description;
  }
}
